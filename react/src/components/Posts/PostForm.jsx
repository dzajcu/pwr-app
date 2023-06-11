import React, { useState } from "react";
import styles from "../styles/css/PostForm.module.css";
import { fetchPostContent } from "../../functions/fetchPostContent";
import { textInputHandler } from "../../functions/inputHandlers";

export const PostForm = ({ setPostUpdates }) => {
    const [post, setPost] = useState({});
    const [characters, setCharacters] = useState(1000);

    const handleSubmit = (e) => {
        e.preventDefault();
        const symbols = /[&/\\,+()$~%.'"*?<>{}]/g;
        const tags = post
            .replace(symbols, " ")
            .split(" ")
            .filter((word) => word[0] === "#" && word.length > 2);
        fetchPostContent(post, tags);
        setPostUpdates((prevCount) => prevCount + 1);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={`${styles.grow_wrap}`}>
                    <textarea
                        name="text"
                        id="text"
                        onInput={(e) =>
                            textInputHandler(e, setCharacters, setPost)
                        }
                        className={`${styles.inputbox}`}
                        type="text"
                        placeholder="Napisz coś..."
                        maxLength="1000"
                    />
                </div>

                <p className={`${styles.counter}`}>
                    Pozostałe znaki: {characters}/1000
                </p>
                <button className={`${styles.btn}`} type="submit">
                    Opublikuj
                </button>
            </form>
        </div>
    );
};
