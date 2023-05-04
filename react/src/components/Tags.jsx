import styles from "./styles/css/Post.module.css";
import React from "react";
import { Tag } from "./Tag";

export const Tags = (props) => {
    return (
        <div className={styles.tags}>
            {props.tagsList.map((tag) => (
                <Tag tag={tag} />
            ))}
        </div>
    );
};
