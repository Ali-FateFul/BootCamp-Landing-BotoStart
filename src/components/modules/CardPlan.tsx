import { TCard } from "@/types";
import styles from "./CardPlan.module.css";

function CardPlan({ header, description ,  id}: TCard) {
  const firstClass = header.split(',')[0];
	return (
		//@ts-ignore
		<div className={`${styles.container} ${id % 2 ? styles.odd : styles.even}`}>
			<div className={styles.subContainer}>
				<h3 className={styles[firstClass]}> {header}</h3>
				<p>{description}</p>
			</div>
			<div className={styles.image}>
				<img
					src={`/images/${header}.png`}
					alt={header}
				/>
			</div>
		</div>
	);
}

export default CardPlan;
