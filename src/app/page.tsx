import Content from "@/components/templates/Content";
import Header from "../components/templates/Header";
import styles from "./page.module.css";
import Navbar from "@/components/templates/Navbar";

export default function Home() {
	return (
		<div className={styles.page}>
			<Header />
			<Navbar />
			<Content />
		</div>
	);
}
