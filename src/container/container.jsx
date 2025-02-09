import { useState } from "react";
import styles from "./container.module.css";

function ValentineCard() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.container} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <div className={styles.envelope}></div>
                <div className={`${styles.card} ${isOpen ? styles.slide : styles["slide-rev"]}`}>
                    <h1 className={styles.message}>Pacommision pls<br/> Ilalagay ko lang rito haha<br/>bapi hirtdey po</h1>
                    <div className={styles.heart}></div>
                </div>
            <div className={styles.cover}></div>
            <div className={`${styles.lid} ${isOpen ? styles.open : styles["open-rev"]}`}></div>
            <div className={styles.shadow}></div>
        </div>
    );
}

export default ValentineCard;