"use client";
import { TSeasons } from "@/types";
import styles from "./CardSeasons.module.css";
import { useState } from "react";

export default function CardSeasons({ header, fields }: TSeasons) {
	const [isOpen, setIsOpen] = useState(false);
	const openHandler = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className={styles.container}>
			<div
				className={isOpen ? styles.header : styles.close}
				onClick={openHandler}>
				<h3>{header}</h3>
				<img src='./images/arrow.png' />
			</div>
			<div className={`${styles.items} ${isOpen ? styles.open : ''}`}>
				{isOpen ? (
					<ul>
						{fields.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				) : null}
			</div>
		</div>
	);
}
