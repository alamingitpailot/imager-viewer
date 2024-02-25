

import Panzoom from '@panzoom/panzoom';

export const zoomInt = (zoom, cId, setPanZoom) => {
    const { disablePan, disableZoom, disableXAxis, disableYAxis, duration, startScale, step } = zoom;
    const elem = document.getElementById(`panzoom-${cId}`);
    const pan = Panzoom(elem, {
        // Whether or not to transition the scale
        animate: false,

        // This option treats the Panzoom element's parent as a canvas. 
        // Effectively, Panzoom binds the down handler to the parent instead of the Panzoom element, so that pointer events anywhere on the "canvas" moves its children. 
        canvas: false,

        // Default cursor style for the element
        cursor: 'move',

        // Disable panning and zooming
        disablePan,
        disableZoom,

        // Pan only on the X or Y axes
        disableXAxis,
        disableYAxis,

        // <a href="https://www.jqueryscript.net/animation/">Animation</a> duration (ms)
        duration, // ok

        // CSS easing used for scale transition
        easing: 'ease-in-out',

        // An array of elements to exclude
        exclude: [],

        // Or add the CSS class to element that should be excluded
        excludeClass: 'panzoom-exclude',

        // Override the default handle start event here
        // handleStartEvent: function (e) {
        //     e.preventDefault();
        //     e.stopPropagation();
        // },

        // min/max scale factors
        maxScale: 12,
        minScale: 0.125,

        // CSS overflow property
        overflow: 'hidden',

        // Disable panning while the scale is equal to the starting value
        panOnlyWhenZoomed: false,

        // Enable panning during pinch zoom
        pinchAndPan: false,

        // When passing x and y values to .pan(), treat the values as relative to their current values
        relative: false,

        // Override the transform setter. 
        // setTransform: setTransform,

        // X Value used to set the beginning transform
        startX: 0,

        // Y Value used to set the beginning transform
        startY: 0,

        // Scale used to set the beginning transform
        startScale, // ok

        // Step options
        step, // ok

        // Contain the panzoom element either inside or outside the parent.
        // "inside" | "outside"
        contain: null, // ok

        // set touch-action on both the Panzoom element and its parent
        touchAction: 'none'
    });
    setPanZoom(pan);
    const parent = elem.parentElement;
    pan.parent = parent;
    parent.addEventListener('wheel', pan.zoomWithWheel);
}

export const pano = (clientId, img, autoRotate, rotateSpeed, hideControl) => {
    const panoContainer = document.querySelector(`#bpivbImageViewer-${clientId} .bpivbPanorama`);
    panoContainer.innerHTML = '';

    const imageSource = img.url;
    const panorama = new PANOLENS.ImagePanorama(imageSource);
    const viewer = new PANOLENS.Viewer({
        container: panoContainer,
        autoRotate,
        autoRotateSpeed: rotateSpeed,
        controlBar: hideControl,
    });
    viewer.add(panorama);
}