import CardFeatures from "../modules/CardFeatures";
import { features } from "@/fixtures/featuresData";
import styles from "./Features.module.css";

function Features() {
	return (
		<div className={styles.container}>
			<h2>
				ویژگی های <span>بوت کمپ</span>
			</h2>
			<div>
				{features.map((item) => (
					<CardFeatures
						key={item.id}
						id={item.id}
						header={item.header}
						description={item.description}
					/>
				))}
			</div>
		</div>
	);
}

export default Features;
