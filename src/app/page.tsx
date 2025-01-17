import Content from "@/components/templates/Content";
import Header from "../components/templates/Header";
import styles from "./page.module.css";
import Navbar from "@/components/templates/Navbar";
import Footer from "@/components/templates/Footer";

export default function Home() {
	return (
		<div className={styles.page}>
			<Header />
			<Navbar />
			<Content />
		</div>
	);
}
