import styles from "./Payment.module.css";
export default function Payment() {
	return (
		<div className={styles.container}>
			<h3 className={styles.top}>ثبت نام در بوت کمپ</h3>
			<div className={styles.price}>
				<div>
					<h4>هزینه اصلی:</h4>
					<h3>هزینه در جشنواره:</h3>
				</div>
				<div>
					<h4 className={styles.high}>20,000,000 تومان</h4>
					<h3 className={styles.low}>17,000,000 تومان</h3>
				</div>
			</div>
			<div>
				<button className={styles.paymentBtn}>ثبت نام</button>
				<button className={styles.paymentBtnSecond}>پیش ثبت نام رایگان</button>
			</div>
		</div>
	);
}
