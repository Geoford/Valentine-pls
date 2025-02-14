import { useState } from "react";
import styles from "./container.module.css";

function ValentineCard() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.container} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <div className={styles.envelope}></div>
                <div className={`${styles.card} ${isOpen ? styles.slide : styles["slide-rev"]}`}>
                    <h1 className={styles.message1}>Semicolon ka ba?</h1>
                    <h2 className={styles.message2}>&emsp;Kasi ikaw ang kukumpleto sa code ng buhay ko hehe; </h2>
                    <h2 className={styles.message3}>Happy valentine&#39;s day &lt;3</h2>
                    <div className={styles.heart}></div>
                </div>
            <div className={styles.cover}></div>
            <div className={`${styles.lid} ${isOpen ? styles.open : styles["open-rev"]}`}></div>
            <div className={styles.shadow}></div>
        </div>
    );
}

export default ValentineCard;