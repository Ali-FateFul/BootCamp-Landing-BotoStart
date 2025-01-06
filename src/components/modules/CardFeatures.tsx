import { TCard } from "@/types";
import React from "react";

function CardFeatures({ header, img, description }: TCard) {
	return (
		<div>
			<img src={img} />
			<h3>{header}</h3>
			<p>{description}</p>
		</div>
	);
}

export default CardFeatures;
