
import { PanelBody, __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Magnify = ({ updateObject, magnify }) => {
    return <PanelBody className='bPlPanelBody' title={__('Magnify Options', 'bpivb')} initialOpen={false}>
        <NumberControl label={__('Speed-(ms)', 'bpivb')} labelPosition='side' className='' value={magnify?.speed} onChange={(val) => updateObject('magnify', 'speed', val)} />

        <NumberControl label={__('TimeOut-(ms)', 'bpivb')} labelPosition='side' className='mt10' value={magnify?.timeOut} onChange={(val) => updateObject('magnify', 'timeOut', val)} />
    </PanelBody>
}
export default Magnify;