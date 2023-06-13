import React from "react";
import styles from "../styles/css/APIcard.module.css";
import { tagSearchHandler } from "../../functions/changeHandlers";

export const TagSuggest = ({ text, setPosts, setPrefix, setTags, setSearching }) => {
    return (
        <button
            onClick={(e) =>
                tagSearchHandler(e, text, setPosts, setPrefix, setTags, setSearching)
            }
        >
            {text}
        </button>
    );
};
