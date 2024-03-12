
import { PanelBody, RangeControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Zoom = ({ updateObject, zoom }) => {
    //zoom
    const { disablePan, disableZoom, disableXAxis, disableYAxis, startScale, step } = zoom;
    return <PanelBody className='bPlPanelBody' title={__('Zoom Options', 'image-viewer')} initialOpen={false}>

        <ToggleControl label={__('Disable Pan', 'image-viewer')} className='mt10' checked={disablePan} onChange={(val) => updateObject('zoom', 'disablePan', val)} />

        <ToggleControl label={__('Disable Zoom', 'image-viewer')} className='mt10' checked={disableZoom}
            onChange={(val) => updateObject('zoom', 'disableZoom', val)} />

        <ToggleControl label={__('Disable X Axis', 'image-viewer')} className='mt10' checked={disableXAxis}
            onChange={(val) => updateObject('zoom', 'disableXAxis', val)} />

        <ToggleControl label={__('Disable Y Axis', 'image-viewer')} className='mt10' checked={disableYAxis}
            onChange={(val) => updateObject('zoom', 'disableYAxis', val)} />

        {/* <RangeControl label={__('Duration', 'image-viewer')} className='mt10' value={duration}
            onChange={(val) => updateObject('zoom', 'duration', val)} min={200} max={5000} step={100} /> */}

        <RangeControl label={__('Start Scale', 'image-viewer')} className='mt10' value={startScale} onChange={(val) => updateObject('zoom', 'startScale', val)} />

        <RangeControl label={__('Step', 'image-viewer')} className='mt10' value={step} onChange={(val) => updateObject('zoom', 'step', val)} />
    </PanelBody>
}
export default Zoom;