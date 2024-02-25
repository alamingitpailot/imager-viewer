import { __ } from '@wordpress/i18n';

export const targetOpt = [
	{ label: __('__', 'bpivb'), value: '' },
	{ label: __('__blank', 'bpivb'), value: '_blank' },
	{ label: __('__parent', 'bpivb'), value: '_parent' },
	{ label: __('__self', 'bpivb'), value: '_self' },
	{ label: __('__top', 'bpivb'), value: '_top' },
]

export const zoomContainOpt = [
	{ label: __('Null', 'bpivb'), value: 'null' },
	{ label: __('In Side', 'bpivb'), value: 'inside' },
	{ label: __('Out Side', 'bpivb'), value: 'outside' },
]

export const viewerTypeOpt = [
	{ label: __('Zoom', 'bpivb'), value: 'zoom' },
	{ label: __('Magnify', 'bpivb'), value: 'magnify' },
	{ label: __('Map', 'bpivb'), value: 'map' },
	{ label: __('Pano or Rotation', 'bpivb'), value: 'pano' },
]

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'bpivb') },

];