import CardPlan from "../modules/CardPlan";
import { planData } from "@/fixtures/planData";
import styles from "./Plan.module.css";

function Plan() {
	return (
		<div className={styles.container}>
			<h2>
				برنامه کلی <span> بوت کمپ </span> در یک نگاه
			</h2>
			<div className={styles.subContainer}>
				{planData.map((item) => (
					<CardPlan
						key={item.id}
						id={item.id}
						header={item.header}
						description={item.description}
					/>
				))}
			</div>
			<div className={styles.lineContainer}>
				<img
					src='./images/Line.png'
					alt=''
					className={styles.line}
				/>
			</div>
		</div>
	);
}

export default Plan;
