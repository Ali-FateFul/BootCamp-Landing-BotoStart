"use client";
import { IQuestion } from "@/types";
import styles from "./CardQuestion.module.css";
import { useState } from "react";

export default function CardQuestion({ header, description }: IQuestion) {
	const [isOpen, setIsOpen] = useState(false);
	const openHandler = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.container}>
			<div
				className={isOpen ? styles.header : styles.close}
				onClick={openHandler}>
				<div className={styles.title}>
					<img src='./images/message.png' />
					<h4>{header}</h4>
				</div>
				<img
					src='./images/arrow.png'
					className={isOpen ? styles.down: styles.up}
				/>
			</div>
			{isOpen ? <p className={isOpen ? styles.open : styles.nist}>{description}</p> : null}
		</div>
	);
}
