import React, { useEffect, useRef, useState } from "react";

const ResizableDraggable = ({
  value = {
    width: 100,
    height: 100,
    top: 50,
    left: 50
  },
  // width = 100,
  // height = 100,
  // offsetTop = "50px",
  // offsetLeft = "50px",
  background = "#3498DB",
  onChange = () => { },
  ...props
}) => {
  const { width = 100, height = 100, top = 50, left = 50 } = value;
  const resizable = useRef(null);
  const resizeHandle = useRef(null);
  const [offset, setOffset] = useState({
    top: parseInt(top),
    left: parseInt(left)
  });
  const [dimension, setDimension] = useState({ width, height });
  const [isResizing, setResizing] = useState(true);
  const [isDragging, setDragging] = useState(true);

  const containerDimension = useRef();

  useEffect(() => {
    if (resizable.current) {
      const height =
        resizable.current.parentNode.offsetHeight ||
        resizable.current.offsetHeight * 2;
      const width =
        resizable.current.parentNode.offsetWidth ||
        resizable.current.offsetWidth * 2;
      containerDimension.current = { height, width };
      // resizable.current.parentNode.style.height = height + "px";
      // resizable.current.parentNode.style.width = width + "px";
      // resizable.current.parentNode.style.background = "green";
      // resizable.current.parentNode.style.position = "relative";
    }

    const handleResizeStart = (e) => {
      e.stopPropagation();
      const prevX = e.clientX;
      const prevY = e.clientY;
      const initialWidth = resizable.current.offsetWidth;
      const initialHeight = resizable.current.offsetHeight;
      const handleResize = (e) => {
        if (!isResizing) return;
        let newWidth = initialWidth + (e.clientX - prevX);
        const newHeight = initialHeight + (e.clientY - prevY);
        const parentBoundingRect = resizable.current.parentNode.getBoundingClientRect();
        const boundingRect = resizable.current.getBoundingClientRect();
        let width = dimension.width;
        if (resizable.current.parentNode.offsetWidth >= newWidth + (boundingRect.left - parentBoundingRect.left)) {
          resizable.current.style.width = newWidth + "px";
          width = newWidth;
          // setDimension({ ...dimension, width: newWidth });
        }

        if (resizable.current.parentNode.offsetHeight >= newHeight + (boundingRect.top - parentBoundingRect.top)) {
          resizable.current.style.height = newHeight + "px";
          setDimension({ width, height: newHeight });
        }
      };

      const handleResizeEnd = () => {
        setResizing(false);
        document.removeEventListener("mousemove", handleResize);
        document.removeEventListener("mouseup", handleResizeEnd);
      };

      setResizing(true);
      document.addEventListener("mousemove", handleResize);
      document.addEventListener("mouseup", handleResizeEnd);
    };

    const handleDragStart = (e) => {
      if (!resizable.current) return;
      const parentBoundingRect = resizable.current.parentNode.getBoundingClientRect();
      const boundingRect = resizable.current.getBoundingClientRect();
      const offsetX = e.clientX - (boundingRect.left - parentBoundingRect.left);
      const offsetY = e.clientY - (boundingRect.top - parentBoundingRect.top);

      const handleDrag = (e) => {
        const leftOffset = e.clientX - offsetX;
        const topOffset = e.clientY - offsetY;
        if (!isDragging) return;

        let left = leftOffset;
        if (leftOffset <= 0) {
          left = 0;
        }


        if (
          resizable.current.offsetWidth + leftOffset >=
          resizable.current.parentNode.offsetWidth
        ) {
          left =
            resizable.current.parentNode.offsetWidth - resizable.current.offsetWidth;
        }

        let top = topOffset;


        if (
          resizable.current.offsetHeight + topOffset >=
          resizable.current.parentNode.offsetHeight
        ) {
          top =
            resizable.current.parentNode.offsetHeight - resizable.current.offsetHeight;
        }
        if (top < 0) {
          top = 0;
        }

        resizable.current.style.left = left + "px";
        resizable.current.style.top = top + "px";

        setOffset({ top: parseInt(top), left: parseInt(left) });
      };

      const handleDragEnd = () => {
        if (resizable.current) {
          setDragging(false);
          resizable.current.style.cursor = "move";
          document.removeEventListener("mousemove", handleDrag);
          document.removeEventListener("mouseup", handleDragEnd);
        }
      };

      setDragging(true);
      resizable.current.style.cursor = "grabbing";
      document.addEventListener("mousemove", handleDrag);
      document.addEventListener("mouseup", handleDragEnd);
    };

    resizeHandle.current?.addEventListener("mousedown", handleResizeStart);
    resizable.current?.addEventListener("mousedown", handleDragStart);

    return () => {
      resizeHandle.current?.removeEventListener("mousedown", handleResizeStart);
      resizable.current?.removeEventListener("mousedown", handleDragStart);
    };
  }, []);

  useEffect(() => {
    onChange({ ...dimension, ...offset });
  }, [offset, dimension]);

  return (
    <div
      ref={resizable}
      className="resizable-draggable"
      id="resizeMe"
      style={{
        width,
        height,
        background,
        zIndex: "99",
        left: typeof offsetLeft === "string" ? left : left + "px",
        top: typeof offsetTop === "string" ? top : top + "px"
      }}
      {...props}
    >
      <div ref={resizeHandle} id="resizeHandle"></div>
    </div>
  );
};

export default ResizableDraggable;
