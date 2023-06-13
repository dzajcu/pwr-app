import styles from "../styles/css/APIcard.module.css";
import React from "react";
import { TagSuggest } from "./TagSuggest.jsx";

export const TagsSuggest = ({ tags, setPosts, setPrefix, setTags, setSearching }) => {
    return (
        <div className={styles.event_cards}>
            {tags.map((tag) => (
                <TagSuggest
                    text={tag}
                    setPosts={setPosts}
                    setPrefix={setPrefix}
                    setTags={setTags}
                    setSearching={setSearching}
                />
            ))}
        </div>
    );
};
