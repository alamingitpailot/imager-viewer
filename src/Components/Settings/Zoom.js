
import { PanelBody, RangeControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Zoom = ({ updateObject, zoom }) => {
    //zoom
    const { disablePan, disableZoom, disableXAxis, disableYAxis, startScale, step } = zoom;
    return <PanelBody className='bPlPanelBody' title={__('Zoom Options', 'bpivb')} initialOpen={false}>

        <ToggleControl label={__('Disable Pan', 'bpivb')} className='mt10' checked={disablePan} onChange={(val) => updateObject('zoom', 'disablePan', val)} />

        <ToggleControl label={__('Disable Zoom', 'bpivb')} className='mt10' checked={disableZoom}
            onChange={(val) => updateObject('zoom', 'disableZoom', val)} />

        <ToggleControl label={__('Disable X Axis', 'bpivb')} className='mt10' checked={disableXAxis}
            onChange={(val) => updateObject('zoom', 'disableXAxis', val)} />

        <ToggleControl label={__('Disable Y Axis', 'bpivb')} className='mt10' checked={disableYAxis}
            onChange={(val) => updateObject('zoom', 'disableYAxis', val)} />

        {/* <RangeControl label={__('Duration', 'bpivb')} className='mt10' value={duration}
            onChange={(val) => updateObject('zoom', 'duration', val)} min={200} max={5000} step={100} /> */}

        <RangeControl label={__('Start Scale', 'bpivb')} className='mt10' value={startScale} onChange={(val) => updateObject('zoom', 'startScale', val)} />

        <RangeControl label={__('Step', 'bpivb')} className='mt10' value={step} onChange={(val) => updateObject('zoom', 'step', val)} />
    </PanelBody>
}
export default Zoom;