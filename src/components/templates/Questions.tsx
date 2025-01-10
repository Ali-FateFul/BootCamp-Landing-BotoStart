import { questionData } from "@/fixtures/questionsData";
import { IQuestion } from "@/types";
import styles from "./Question.module.css";
import CardQuestion from "../modules/CardQuestion";

export default function Questions() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<img src='./images/chat.png' />
				<h2>سوالات متداول</h2>
			</div>
			<div className={styles.items}>
				{questionData.map((item: IQuestion) => (
					<CardQuestion
						key={item.id}
						header={item.header}
						description={item.description}
					/>
				))}
			</div>
			<img src='./images/program.png' className={styles.questimg}/>
		</div>
	);
}
