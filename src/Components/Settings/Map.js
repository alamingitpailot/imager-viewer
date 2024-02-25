import { PanelBody, SelectControl, TextControl, __experimentalNumberControl as NumberControl, Button, } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { targetOpt } from '../../utils/options';

const Map = ({ updateItem, maps, activeIndex, removePosition, addPosition }) => {
    const { width: mapWidth, height: mapHeight, top, left, link, title, target } = maps[activeIndex] || {};
    return <PanelBody className='bPlPanelBody' title={__('Maps Options', 'bpivb')} initialOpen={false}>

        <PanelBody className='bPlPanelBody' title={__(`Area-${activeIndex + 1} `, 'bpivb')} initialOpen={false}>
            <TextControl label={__('Link', 'bpivb')} className='mt10' value={link} onChange={(val) => { updateItem(activeIndex, val, "link") }} />

            <TextControl label={__('Title', 'bpivb')} className='mt10' value={title} onChange={(val) => { updateItem(activeIndex, val, "title") }} />

            <SelectControl label={__('Target', 'bpivb')} className='mt10' value={target} onChange={(val) => updateItem(activeIndex, val, 'target')} options={targetOpt} />

            <NumberControl label={__('Width', 'bpivb')} labelPosition="side" className='mt10' value={mapWidth} onChange={(val) => updateItem(activeIndex, parseInt(val), "width")} />

            <NumberControl label={__('Height', 'bpivb')} labelPosition="side" className='mt10' value={mapHeight} onChange={(val) => updateItem(activeIndex, parseInt(val), "height")} />

            <NumberControl label={__('Top', 'bpivb')} labelPosition="side" className='mt10' value={top} onChange={(val) => updateItem(activeIndex, parseInt(val), "top")} />

            <NumberControl label={__('Left', 'bpivb')} labelPosition="side" className='mt10' value={left} onChange={(val) => updateItem(activeIndex, parseInt(val), "left")} />

            <div className="itemAction bsbButtonArea mt20">
                {1 < maps.length && <Button className='removeItem bsb-general-button'
                    onClick={() => removePosition(activeIndex)}>{__('Remove', 'slider')}</Button>}
            </div>
        </PanelBody>

        {/* Slide Add Button  */}
        <div className='addItem'>
            <Button className='bsb-general-button' onClick={addPosition}>{__('Add New Slide', 'slider')}</Button>
        </div>
    </PanelBody>
}
export default Map;