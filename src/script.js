import { createRoot } from 'react-dom/client';

import './style.scss';
import Style from './Style';
import Viewer from './Viewer';

// Block Directory
document.addEventListener('DOMContentLoaded', () => {
	const allBlockDirectory = document.querySelectorAll('.wp-block-bpivb-image-viewer-directory');
	allBlockDirectory.forEach(directory => {
		const attributes = JSON.parse(directory.dataset.attributes);

		createRoot(directory).render(<>
			<Style attributes={attributes} clientId={attributes.cId} />
			<div className='bpivbImageViewer'>
				<Render attributes={attributes} clientId={attributes.cId} />
			</div>
		</>);

		directory?.removeAttribute('data-attributes');
	});
});

const Render = ({ attributes, clientId }) => {
	const { maps, img, cId } = attributes;

	const imageMapEle = <div className='bpivbImageMap'>
		<img src={img?.url} useMap={`#image-map-${cId}`} />
		<map name={`#image-map-${cId}`}>
			{maps.map((map, index) => {
				const { width, height, top, left, link, title, target } = map;
				return <area shape="rect" key={index} target={target} alt={title} title={title} href={link} style={{ top, left, width: width + 'px', height: height + 'px', position: 'absolute' }} />
			})}
		</map>
	</div>

	return <Viewer attributes={attributes} clientId={clientId} imageMapEle={imageMapEle} />

}
