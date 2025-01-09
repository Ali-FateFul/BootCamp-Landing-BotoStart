import { seasonsData } from "@/fixtures/seasonsData";
import CardSeasons from "../modules/CardSeasons";
import { TSeasons } from "@/types";
import styles from "./Seasons.module.css";

export default function Seasons() {
	
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<img src='./images/season.png' />
				<h2>سرفصل ها</h2>
			</div>
			<div className={styles.items}>
				{seasonsData.map((item: TSeasons) => (
					<CardSeasons
						key={item.id}
						header={item.header}
						fields={item.fields}
					/>
				))}
			</div>
		</div>
	);
}
