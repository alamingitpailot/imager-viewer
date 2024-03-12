
import { PanelBody, __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Magnify = ({ updateObject, magnify }) => {
    return <PanelBody className='bPlPanelBody' title={__('Magnify Options', 'image-viewer')} initialOpen={false}>
        <NumberControl label={__('Speed-(ms)', 'image-viewer')} labelPosition='side' className='' value={magnify?.speed} onChange={(val) => updateObject('magnify', 'speed', val)} />

        <NumberControl label={__('TimeOut-(ms)', 'image-viewer')} labelPosition='side' className='mt10' value={magnify?.timeOut} onChange={(val) => updateObject('magnify', 'timeOut', val)} />
    </PanelBody>
}
export default Magnify;