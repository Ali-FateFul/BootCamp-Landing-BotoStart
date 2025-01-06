import React from "react";
import CardPlan from "./CardPlan";

function Plan() {
	return (
		<div>
			<h2>
				برنامه کلی <span> بوت کمپ </span> در یک نگاه
			</h2>
			{plan.map((item) => (
				<CardPlan
					key={item.id}
					img={item.img}
					header={item.header}
					description={item.description}
				/>
			))}
			<img />
			
		</div>
	);
}

export default Plan;
