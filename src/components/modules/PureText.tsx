import styles from "./PureText.module.css";
function PureText() {
	return (
		<div className={styles.container}>
			<h2>چرا بوت کمپ فرانت اند؟</h2>
			<p className={styles.first}>
				وب سایت ما بصورت تخصصی برای آموزش مهارت های فرانت اند طراحی شده است تا
				هر فردی ، از مبتدی تا علاقه مندان پیشرفته، بتوانند با استفاده از دوره
				های متنوع و پروژه محور، به یک توسعه دهنده فرانت اند حرفه ای تبدیل شود
				،در این بوت کمپ، تمرکز اصلی ما بر آموزش اصولی HTML، CSS، JavaScript
				وفریمورک هایی مانند React و Vue است.
				<br />
				<span className={styles.second}>
					همه دوره ها به صورت مرحله به مرحله طراحیشده اند و شامل پروژه های واقعی
					و تمرینات عملی هستند که مهارت های یادگرفته شده را مستقیما به کار می
					گیرند. همچنین، تیم مربیان و متخصصین ما در طول دوره، شما را همراهی کرده
					و با ارائه بازخورد های سازنده ، در هر مرحله از یادگیری، شما را به سمت
					بهتر شدن هدایت می کنند.
				</span>
			</p>
		</div>
	);
}

export default PureText;
