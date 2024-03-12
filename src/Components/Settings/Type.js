import { PanelBody, SelectControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { viewerTypeOpt } from '../../utils/options';
import { InlineDetailMediaUpload, Label } from '../../../../Components';
import { perUnit, pxUnit } from '../../../../Components/utils/options';

const Type = ({ attributes, setAttributes }) => {
    const { img, viewerType, width, height } = attributes;
    return <PanelBody className='bPlPanelBody' title={__('Image Source', 'image-viewer')} initialOpen={false}>
        <Label className='mb5'>{__('Image:', 'panorama-block')}</Label>
        <InlineDetailMediaUpload value={img} types={['image']} onChange={val => setAttributes({ img: val })} placeholder={__('Enter Image URL', 'panorama-block')} />

        <SelectControl className="mt20" label={__('View Type', 'image-viewer')} value={viewerType} labelPosition="side" onChange={(val) => setAttributes({ viewerType: val })} options={viewerTypeOpt} />

        {viewerType === 'pano' && <>
            <UnitControl className='mt20' label={__('Width:', 'panorama-block')} labelPosition='left' value={width} onChange={val => setAttributes({ width: val })} units={[pxUnit(), perUnit()]} />
            <UnitControl className='mt10' label={__('height:', 'panorama-block')} labelPosition='left' value={height} onChange={val => setAttributes({ height: val })} units={[pxUnit(), perUnit()]} />
        </>}
    </PanelBody>
}
export default Type;