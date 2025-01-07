import styles from "./PureText.module.css";
function PureText() {
	return (
		<div className={styles.container}>
			<p>
				وب سایت ما بصورت تخصصی برای آموزش مهارت های فرانت اند طراحی شده است تا
				هر فردی ، از مبتدی تا علاقه مندان پیشرفته، بتوانند با استفاده از دوره
				های متنوع و پروژه محور، به یک توسعه دهنده فرانت اند حرفه ای تبدیل شود
				،در این بوت کمپ، تمرکز اصلی ما بر آموزش اصولی HTML، CSS، JavaScript
				وفریمورک هایی مانند React و Vue است.
			</p>
		</div>
	);
}

export default PureText;
