import React from "react";
import styles from "./styles/css/Button.module.css";

function Button(props) {
    return (
        <button className={`${styles.box} ${styles.btn} ${props.className}`}>
            {props.icon && <span className={styles.icon}>{props.icon}</span>}
            <p className={styles.text_bigger}>
                {props.label}
            </p>
        </button>
    );
}

export default Button;
