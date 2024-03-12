import { __ } from '@wordpress/i18n';

export const targetOpt = [
	{ label: __('__', 'image-viewer'), value: '' },
	{ label: __('__blank', 'image-viewer'), value: '_blank' },
	{ label: __('__parent', 'image-viewer'), value: '_parent' },
	{ label: __('__self', 'image-viewer'), value: '_self' },
	{ label: __('__top', 'image-viewer'), value: '_top' },
]

export const zoomContainOpt = [
	{ label: __('Null', 'image-viewer'), value: 'null' },
	{ label: __('In Side', 'image-viewer'), value: 'inside' },
	{ label: __('Out Side', 'image-viewer'), value: 'outside' },
]

export const viewerTypeOpt = [
	{ label: __('Zoom', 'image-viewer'), value: 'zoom' },
	{ label: __('Magnify', 'image-viewer'), value: 'magnify' },
	{ label: __('Map', 'image-viewer'), value: 'map' },
	{ label: __('Pano or Rotation', 'image-viewer'), value: 'pano' },
]

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'image-viewer') },

];