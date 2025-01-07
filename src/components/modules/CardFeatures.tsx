import { TCard } from "@/types";
import styles from "./CardFeatures.module.css";

function CardFeatures({ header, description, id }: TCard) {
	return (
		<div className={styles.container}>
			<img
				src={`/images/${id}.png`}
				alt={header}
			/>
			<h3>{header}</h3>
			<p>{description}</p>
		</div>
	);
}

export default CardFeatures;
