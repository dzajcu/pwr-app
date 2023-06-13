import styles from "../styles/css/Banner.module.css";
import React, { useState } from "react";
import { fetchGetTags } from "../../functions/fetchGetTags";
import { searchInputChangeHandler } from "../../functions/inputHandlers";
import { TagsSuggest } from "./TagsSuggest";
import { TagSuggest } from "./TagSuggest";

export const SearchBar = ({ setPosts, setSearching }) => {
    const [tags, setTags] = useState([]);
    const [prefix, setPrefix] = useState("");

    return (
        <div className={`${styles.search_bar_background}`}>
            <input
                onChange={(e) =>
                    searchInputChangeHandler(e, setTags, setPrefix)
                }
                type="text"
                className={`${styles.search_bar}`}
                placeholder="Szukaj..."
                value={prefix}
            />
            <TagsSuggest
                tags={tags}
                setPosts={setPosts}
                setPrefix={setPrefix}
                setTags={setTags}
                setSearching={setSearching}
            />
        </div>
    );
};
