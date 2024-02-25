
import { useState, useEffect, useRef } from 'react';
import { produce } from 'immer';

// Settings Components
import { tabController } from '../../Components/utils/functions';
import Settings from './Settings';
import Style from './Style';
import Viewer from './Viewer';

import ResizableDraggable from './Components/ResizableDragable';


const Edit = props => {
	const { className, attributes, setAttributes, clientId, isSelected } = props;
	const { maps, img } = attributes;

	useEffect(() => { clientId && setAttributes({ cId: clientId.substring(0, 10) }); }, [clientId]); // Set & Update clientId to cId
	useEffect(() => tabController(), [isSelected]);

	const [activeIndex, setActiveIndex] = useState(0);
	const [overly, setOverly] = useState(false);
	const mainArea = useRef();

	const addPosition = () => {
		setAttributes({
			maps: [...maps, {
				top: 100,
				left: 100,
				width: 50,
				height: 100,
				shape: "rect",
				link: "https://google.com",
				title: "Google",
				target: "_blank"
			}]
		})
	}

	const removePosition = (index) => {
		const remove = [...maps];
		remove.splice(index, 1);
		setAttributes({ maps: remove });
		setActiveIndex(0 === activeIndex ? 0 : activeIndex - 1);
	}

	const updateItem = (index, val, type = '') => {
		const newItem = produce(maps, draft => {
			if (type) {
				draft[index][type] = val
			} else {
				draft[index] = val;
			}
		});
		setAttributes({ maps: newItem });
	}

	const imageMapEle = <div className='bpivbImageMap'>
		<img src={img.url} alt={img.title} />
		{maps.map((image, index) => {
			return <><ResizableDraggable background="#ddd6" onClick={() => setActiveIndex(index)} value={image} onChange={(info) => updateItem(index, { ...image, ...info })} /></>
		})}
	</div>

	useEffect(() => {
		let handler = (e) => {
			if (!mainArea.current.contains(e.target)) {
				setOverly(false);
			}
		}
		document.addEventListener("mousedown", handler);
	});

	return <>
		<Settings attributes={attributes} setAttributes={setAttributes} activeIndex={activeIndex} addPosition={addPosition} removePosition={removePosition} setActiveIndex={setActiveIndex} updateItem={updateItem} />

		<div className={className} id={`bpivbImageViewer-${clientId}`} >
			<Style attributes={attributes} clientId={clientId} />

			<div ref={mainArea} className={`bpivbImageViewer ${overly ? 'overly' : ''}`} onClick={() => setOverly(true)}>
				<Viewer attributes={attributes} clientId={clientId} imageMapEle={imageMapEle} />
			</div>
		</div>
	</>;
};
export default Edit;