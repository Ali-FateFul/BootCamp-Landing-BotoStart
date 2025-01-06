import React from "react";
import Card from "./CardFeatures";

function Features() {
	return (
		<div>
			<h2>
				ویژگی های <span>بوت کمپ</span>
			</h2>
			{features.map((item) => (
				<Card
					key={item.id}
					img={item.img}
					header={item.header}
					description={item.description}
				/>
			))}
		</div>
	);
}

export default Features;
