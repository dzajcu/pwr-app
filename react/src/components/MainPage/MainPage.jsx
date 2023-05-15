import React, { useState, useEffect } from "react";
import styles from "../styles/css/MainPage.module.css";
import { PostForm } from "../Posts/PostForm";
import { Posts } from "../Posts/Posts";
import { SearchBar } from "./Banner";
import { Link } from "react-router-dom";

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
            <section className={`${styles.left} ${styles.side}`}>
                <div className={`${styles.logo}`}>
                    <Link to="/mainpage">
                        <img
                            src="../../../public/logoblack.png"
                            alt="logo"
                            className={`${styles.logolink}`}
                        />
                    </Link>
                    <Link to="/mainpage" className={`${styles.link}`}>
                        Wirtualna Politechnika
                    </Link>
                </div>
            </section>
            <section className={styles.posts}>
                    <SearchBar />
                <PostForm onAddPost={addPostHandler} />
                <Posts postsList={posts} />
            </section>
            <section className={`${styles.right} ${styles.side}`}></section>
        </div>
    );
};
