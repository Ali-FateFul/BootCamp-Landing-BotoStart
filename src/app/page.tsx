import Content from "@/components/Content";
import Header from "../components/Header";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
			<Header />
			<Content />
		</div>
	);
}
