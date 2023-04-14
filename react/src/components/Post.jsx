import React from "react";
import styles from "./styles/css/Post.module.css";

export const Post = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.content}>
                <div className={styles['post-header']}>
                    <p className={styles.username}>Gragas</p>
                    <p className={styles.date}>{props.date}</p>
                </div>
                <div className={styles.tags}>
                    <p className={styles.tag}>{...props.tags}</p>
                </div>
                <p className={styles.text}>{props.text}</p>
            </div>
        </div>
    );
};
