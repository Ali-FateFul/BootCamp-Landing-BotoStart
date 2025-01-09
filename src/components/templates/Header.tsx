import styles from "./Header.module.css";

function Header() {
	return (
		<div className={styles.container}>
			<div>
				<h1>بوت کمپ فرانت اند</h1>
				<h1>راهی به سوی آینده ای بهتر</h1>
				<p>از مبتدی تا حرفه ای ، کد بزن، یادبگیر و آینده ات را بساز!</p>
				<button className={styles.headerBtnfirst}>پیش ثبت نام رایگان</button>
			</div>
			<div className={styles.image}>
				<img
					src='/images/banner.png'
					alt='banner'
				/>
				<button className={styles.headerBtnsecond}>پیش ثبت نام رایگان</button>
			</div>
		</div>
	);
}

export default Header;
