import React, { useState } from "react";
import styles from "./styles/css/Login.module.css";

export const PostForm = (props) => {
    const [post, setPost] = useState({});
    const [characters, setCharacters] = useState(1000);

    const textHandler = (e) => {
        setCharacters(1000 - e.target.value.length);
        setPost(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/content", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: 'Title',
                description: post,
                tags: ['tag', 'inny tag'],
                creationTime: ''
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                // console.log("Data received:", data);
            })
            .catch((error) => {
                console.error(
                    "There was a problem with the fetch operation:",
                    error
                );
            });
    };


    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <p className={`${styles.text_smaller} ${styles.input_title}`}>
                {characters}
            </p>

            <input
                onChange={textHandler}
                className={`${styles.text_smaller} ${styles.box} ${styles.inputbox}`}
                type="text"
                // value={post}
                placeholder="Cos tam..."
            />
            <button
                className={`${styles.text_bigger} ${styles.submit} ${styles.register} ${styles.box} ${styles.btn}`}
                type="submit"
            >
                Opublikuj
            </button>
        </form>
    );
};
