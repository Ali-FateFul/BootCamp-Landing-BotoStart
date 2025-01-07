import styles from "./Payment.module.css";
export default function Payment() {
	return (
			<div className={styles.container}>
				<div>
					<h4>هزینه اصلی:</h4>
					<h3>هزینه در جشنواره:</h3>
				</div>
				<div>
					<h4 className={styles.high}>20,000,000 تومان</h4>
					<h3 className={styles.low}>17,000,000 تومان</h3>
				</div>
				<div>
					<button className={styles.paymentBtn}>ثبت نام</button>
				</div>
			</div>
	);
}
