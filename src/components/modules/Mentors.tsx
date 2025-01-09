"use client";
import { mentoresData } from "@/fixtures/mentoresData";
import styles from "./Mentors.module.css";
import { useEffect, useState } from "react";

export default function Mentors() {
	const [focus, setFocus] = useState(3);

	const rightHandler = () => {
		if (focus > 1) {
			setFocus((prev) => prev - 1);
		}
	};

	const leftHandler = () => {
		if (focus < mentoresData.length) {
			setFocus((prev) => prev + 1);
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setFocus((prev) => (prev < mentoresData.length ? prev + 1 : 1));
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.items}>
				<img
					src='./images/arrow.png'
					className={styles.right}
					onClick={leftHandler}
					alt='right arrow'
				/>
				{mentoresData.map((item) => (
					<div
						key={item.id}
						className={`${styles.subContainer} ${
							focus === item.id ? styles.show : ""
						}`}
						style={{
							//@ts-ignore
							transform: `translateX(${(item.id - focus) * 100}%)`,
						}}>
						<img
							src={`./images/${item.title}.png`}
							alt={item.title}
						/>
						<h4>{item.header}</h4>
						<p>{item.description}</p>
					</div>
				))}
				<img
					src='./images/arrow.png'
					className={styles.left}
					onClick={rightHandler}
					alt='left arrow'
				/>
			</div>
			<div className={styles.numbering}>
				<span
					className={focus === 1 ? styles.selected : ""}
					onClick={() => setFocus(1)}></span>
				<span
					className={focus === 2 ? styles.selected : ""}
					onClick={() => setFocus(2)}></span>
				<span
					className={focus === 3 ? styles.selected : ""}
					onClick={() => setFocus(3)}></span>
				<span
					className={focus === 4 ? styles.selected : ""}
					onClick={() => setFocus(4)}></span>
				<span
					className={focus === 5 ? styles.selected : ""}
					onClick={() => setFocus(5)}></span>
			</div>
		</div>
	);
}
