import styles from "../styles/css/Banner.module.css";
import React from "react";

export const SearchBar = (props) => {
    return (
        <div className={`${styles.searchBar}`}>
            <input
                type="text"
                className={`${styles.searchar}`}
                placeholder="Szukaj..."
            />
        </div>
    );
};
