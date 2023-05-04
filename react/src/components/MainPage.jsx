import React from "react";
import styles from "./styles/css/MainPage.module.css";

export const MainPage = (props) => {
    return (
        <div className={styles.container}>
            <section className={`${styles.left} ${styles.side}`}>

            </section>
            <section className={styles.posts}>{props.children}
            </section>
            <section className={`${styles.right} ${styles.side}`}>
                
            </section>
        </div>
    );
};
