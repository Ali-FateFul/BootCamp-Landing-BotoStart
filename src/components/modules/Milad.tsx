import styles from "./Milad.module.css";
export default function Milad() {
	return (
		<div className={styles.container}>
			<img src='./images/milad.png' />
			<div className={styles.subContainer}>
				<h3>میلاد عظمی</h3>
				<p>برنامه نویس فرانت اند</p>
				<p className={styles.paragraph}>
					سلام بچه ها، من میلادم و از سال 95 مشغول برنامه نویسی فرانت اند و ریکت
					هستم و همچنین در سال 98 وارد حوزه آموزش نیز شدم و چندین دوره در سایت
					های بزرگ ایرانی منتشر کردم و در نهایت تصمیم به تدریس در پلتفرم اختصاصی
					خودم یعنی بوتواستارت گرفتم. تمام تلاشم اینه تا دوره هایی رو بتون ارائه
					بدم که علاوه بر مباحث مهم حاوی پروژه و تجربه باشه تا مسیر ورود شما به
					بازار کار رو راحتتر کنم.
				</p>
			</div>
		</div>
	);
}
