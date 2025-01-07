import Payment from "../modules/Payment";
import styles from "./Header.module.css";

function Header() {
	return (
		<div className={styles.container}>
			<h1>بوت کمپ فرانت اند</h1>
			<h1>راهی به سوی آینده ای بهتر</h1>
			<p>از مبتدی تا حرفه ای ، کد بزن، یادبگیر و آینده ات را بساز!</p>
			<img
				src='/images/banner.png'
				alt='banner'
			/>
			<button className={styles.headerBtn}>پیش ثبت نام رایگان</button>
			{/* <Payment /> */}
		</div>
	);
}

export default Header;
