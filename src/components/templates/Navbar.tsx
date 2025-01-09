import Payment from "../modules/Payment";
import styles from "./Navbar.module.css";

function Navbar() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<ul>
					<li>معرفی</li>
					<li>ویژگی ها</li>
					<li>برای چه کسانی؟</li>
					<li>سرفصل</li>
					<li>تیم منتورینگ</li>
				</ul>
			</div>
			<Payment />
		</div>
	);
}

export default Navbar;
