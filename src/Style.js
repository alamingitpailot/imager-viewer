
const Style = ({ attributes, clientId }) => {
	const { width, height } = attributes;
	const mainEl = `#bpivbImageViewer-${clientId}`;

	return <style dangerouslySetInnerHTML={{
		__html: `

		${mainEl} {
			text-align:center;
		}

		${mainEl} .bpivbPanorama{
			height:${height};
			width:${width};
		} 

	`}} />;
}
export default Style;