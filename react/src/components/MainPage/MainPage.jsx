import React, { useState, useEffect } from "react";
import styles from "../styles/css/MainPage.module.css";
import { PostForm } from "../Posts/PostForm";
import { Posts } from "../Posts/Posts";
import { SearchBar } from "./Banner";
import { fetchGetContent } from "../../functions/fetchGetContent";
import { Link } from "react-router-dom";
import { handleScrollToTop } from "../../functions/changeHandlers";
import { LinkRounded } from "../reusable/LinkRounded";

export const MainPage = (props) => {
    const [postUpdates, setPostUpdates] = useState(0);
    const [pageId, setPageId] = useState(1);
    const [posts, setPosts] = useState([]);


    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollTop + clientHeight === scrollHeight) {
            setPageId(prevPageId => prevPageId + 1);
        }
    };
    
    useEffect(() => {
        fetchGetContent(setPosts, pageId);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [postUpdates, pageId]);
    

    const handlePostSubmit = () => {
        setPostUpdates((prevCount) => prevCount + 1);
    };
    
    return (
        <div className={styles.container}>
            <section className={`${styles.left} ${styles.side}`}>
                <div className={`${styles.logo}`}>
                    <Link to="#" onClick={handleScrollToTop}>
                        <img
                            src="../../../public/logoblack.png"
                            alt="logo"
                            className={`${styles.logolink}`}
                        />
                    </Link>
                    <Link
                        to="#"
                        onClick={handleScrollToTop}
                        className={`${styles.link}`}
                    >
                        Wirtualna Politechnika
                    </Link>
                </div>
            </section>
            <section className={styles.posts}>
                <SearchBar />
                <PostForm setPostUpdates={handlePostSubmit} />
                <Posts postsList={posts} />
            </section>
            <section className={`${styles.right} ${styles.side}`}>
                <div className={`${styles.buttons}`}>
                    {/* {console.log(sessionStorage.getItem("userToken") === null)} */}
                    {sessionStorage.getItem("userToken") === null ? (
                        <>
                            <LinkRounded
                                style={{
                                    backgroundColor: "black",
                                    color: "white",
                                }}
                                to="/login"
                                text="Zaloguj się"
                            />
                            <LinkRounded
                                to="/register"
                                text="Zarejestruj się"
                            />
                        </>
                    ) : (
                        <LinkRounded
                            style={{
                                backgroundColor: "black",
                                color: "white",
                                maxWidth: 150,
                            }}
                            to="/"
                            text="Wyloguj się"
                            onClick={() => {
                                sessionStorage.removeItem("userToken");
                                console.log(
                                    sessionStorage.getItem("userToken")
                                );
                            }}
                        />
                    )}
                </div>
            </section>
        </div>
    );
};
