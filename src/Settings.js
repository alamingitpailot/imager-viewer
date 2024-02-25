
import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls } from '@wordpress/block-editor';
import { TabPanel, Dashicon, ToolbarGroup, ToolbarButton } from '@wordpress/components';

// Settings Components
import { tabController } from '../../Components/utils/functions';

import { generalStyleTabs } from './utils/options';
import Zoom from './Components/Settings/Zoom';
import Magnify from './Components/Settings/Magnify';
import Pano from './Components/Settings/Pano';
import Map from './Components/Settings/Map';
import Type from './Components/Settings/Type';

const Settings = ({ attributes, setAttributes, activeIndex, addPosition, removePosition, updateItem }) => {
	const { viewerType, magnify, zoom, maps } = attributes;

	// update object 
	const updateObject = (attr, key, val) => {
		const newAttr = { ...attributes[attr] };
		newAttr[key] = val;
		setAttributes({ [attr]: newAttr })
	}

	return <>
		<InspectorControls>
			<TabPanel className='bpivbTabPanel bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>
				{tab => <>
					{'general' === tab.name && <>
						<Type attributes={attributes} setAttributes={setAttributes} />
						{viewerType === "map" && <Map updateItem={updateItem} maps={maps} activeIndex={activeIndex} removePosition={removePosition} addPosition={addPosition} />}
						{viewerType === "zoom" && <Zoom updateObject={updateObject} zoom={zoom} />}
						{viewerType === "magnify" && <Magnify updateObject={updateObject} magnify={magnify} />}
						{viewerType === "pano" && <Pano attributes={attributes} setAttributes={setAttributes} />}
					</>}
				</>}</TabPanel>

		</InspectorControls>

		<BlockControls>
			<ToolbarGroup className='bPlToolbar'>
				<ToolbarButton label={__('Add New Item', 'b-blocks')} onClick={addPosition}><Dashicon icon='plus' size={23} /></ToolbarButton>
			</ToolbarGroup>
		</BlockControls>
	</>;
};
export default Settings;