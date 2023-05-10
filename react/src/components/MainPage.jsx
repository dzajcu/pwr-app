import React, { useState, useEffect } from "react";
import styles from "./styles/css/MainPage.module.css";
import { PostForm } from "./Posts/PostForm";
import { Posts } from "./Posts/Posts";


export const MainPage = (props) => {
    useEffect(() => {
        fetch("http://localhost:8080/content", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setPosts(data);
            })
            .catch((error) => {
                console.error(
                    "There was a problem with the fetch operation:",
                    error
                );
            });
    }, []);

    const [posts, setPosts] = useState([]);

    const addPostHandler = (post) => {
        setPosts((prevPosts) => [post, ...prevPosts]);
    };

    return (
        <div className={styles.container}>
            <section className={`${styles.left} ${styles.side}`}></section>
            <section className={styles.posts}>
                <PostForm onAddPost={addPostHandler} />
                <Posts postsList={posts} />
            </section>
            <section className={`${styles.right} ${styles.side}`}></section>
        </div>
    );
};
