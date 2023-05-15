import styles from "../styles/css/Banner.module.css";
import React from "react";

export const SearchBar = (props) => {
    return (
        <div className={`${styles.search_bar_background}`}>
            <input
                type="text"
                className={`${styles.search_bar}`}
                placeholder="Szukaj..."
            />
        </div>
    );
};
