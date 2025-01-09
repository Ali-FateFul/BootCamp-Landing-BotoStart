import Mentors from "../modules/Mentors";
import Milad from "../modules/Milad";
import styles from "./Mentoring.module.css";
function Mentoring() {
	return (
		<div className={styles.container}>
			<h2>از چه کسی یاد میگیرید؟</h2>
			<Milad />
			<h3>چه کسانی شمارا همراهی میکنند؟</h3>
			<Mentors />
		</div>
	);
}

export default Mentoring;
