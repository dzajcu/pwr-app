import React from "react";
import { Tags } from "./Tags";
import styles from "./styles/css/Post.module.css";

export const Post = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.content}>
                <div className={styles["post-header"]}>
                    <p className={styles.username}>Gragas</p>
                    <p className={styles.date}>{props.date}</p>
                </div>
                <Tags tagsList={props.tags} />
                <p className={styles.text}>{props.text}</p>
            </div>
        </div>
    );
};
