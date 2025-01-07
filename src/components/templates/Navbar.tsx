import styles from "./Navbar.module.css";

function Navbar() {
	return (
		<div className={styles.container}>
			<ul>
				<li>معرفی</li>
				<li>ویزگی ها</li>
				<li>برای چه کسانی؟</li>
				<li>سرفصل</li>
				<li>تیم منتورینگ</li>
			</ul>
		</div>
	);
}

export default Navbar;
