import React from "react";
import styles from "../styles/css/Post.module.css";

export const Tag = (props) => {
    return <p className={styles.tag}>{props.tag}</p> 
}