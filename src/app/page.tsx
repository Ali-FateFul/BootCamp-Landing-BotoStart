import Content from "@/components/templates/Content";
import Header from "../components/templates/Header";
import styles from "./page.module.css";
import Payment from "@/components/modules/Payment";

export default function Home() {
	return (
		<div className={styles.page}>
			<Header />
			<Payment />
			<Content />
		</div>
	);
}
