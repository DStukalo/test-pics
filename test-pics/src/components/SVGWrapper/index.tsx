interface Props {
	file: string;
	id: string;
	classes: string;
}

export function SVGWrapper({ file, id, classes }: Props) {
	return (
		<svg className={classes}>
			<use xlinkHref={`/SVG/${file}.svg#${id}`} />
		</svg>
	);
}
