
import { useEffect, useState } from 'react';
const $ = jQuery;
import { zoomInt, pano } from './utils/functions';

const Viewer = ({ attributes, clientId, imageMapEle }) => {
    const { viewerType, zoom, magnify, cId, img, autoRotate, rotateSpeed, hideControl, width, height } = attributes;

    const [panZoom, setPanZoom] = useState(null);
    const [magnifyEle, setMagnifyEle] = useState(null);

    useEffect(() => {
        if (panZoom) {
            panZoom.parent.removeEventListener('wheel', panZoom.zoomWithWheel);
            panZoom.destroy();
        }
        if (magnifyEle) {
            magnifyEle.destroy();
        }

        if (viewerType === "zoom") {
            zoomInt(zoom, cId, setPanZoom);
        }
        else if (viewerType === "magnify") {
            const magnify = $(`.magnify-${cId} img`).magnify();
            setMagnifyEle(magnify);
        }
        else if (viewerType === 'pano') {
            pano(clientId, img, autoRotate, rotateSpeed, hideControl);
        } else {
            console.log("Unknown viewer type");
        }
    }, [img, viewerType, zoom, magnify, autoRotate, rotateSpeed, hideControl, width, height]);

    return (
        <>
            {/* Render viewer based on viewerType */}
            {viewerType === 'zoom' && (
                <div>
                    <div id={`panzoom-${cId}`}>
                        <img src={img?.url} alt={img.title} />
                    </div>
                </div>
            )}

            {viewerType === 'magnify' && (
                <div >
                    <div className={`magnify-${cId}`}>
                        <img
                            src={img?.url}
                            alt={img?.title}
                            data-magnify-src={img?.url}
                            data-magnify-speed={magnify?.speed}
                            data-magnify-timeout={magnify?.timeOut}
                            // eslint-disable-next-line react/no-unknown-property
                            touchBottomOffset='0'
                            // eslint-disable-next-line react/no-unknown-property
                            finalWidth='500'
                            // eslint-disable-next-line react/no-unknown-property
                            finalHeight='500'
                            // eslint-disable-next-line react/no-unknown-property
                            magnifiedWidth='1000'
                            // eslint-disable-next-line react/no-unknown-property
                            limitBounds={false}
                            // eslint-disable-next-line react/no-unknown-property
                            mobileCloseEvent='touchstart'
                        />
                    </div>
                </div>
            )}

            {viewerType === 'pano' && (
                <div className="bpivbPanorama">
                    {/* Render Panorama viewer */}
                </div>
            )}

            {viewerType === 'map' && (
                imageMapEle
            )}
        </>
    );
};

export default Viewer;
