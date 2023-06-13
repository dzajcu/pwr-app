import React, { useState, useEffect, useLayoutEffect } from "react";
import styles from "../styles/css/MainPage.module.css";
import { PostForm } from "../Posts/PostForm";
import { Posts } from "../Posts/Posts";
import { SearchBar } from "./Banner";
import { APIcards } from "./APIcards";
import { fetchGetContent } from "../../functions/fetchGetContent";
import { fetchGetAPIcards } from "../../functions/fetchGetAPIcards";
import { Link } from "react-router-dom";
import { handleScrollToTop } from "../../functions/changeHandlers";
import { LinkRounded } from "../reusable/LinkRounded";

export const MainPage = (props) => {
    const [postUpdates, setPostUpdates] = useState(0);
    const [pageId, setPageId] = useState(1);
    const [posts, setPosts] = useState([]);
    const [cards, setCards] = useState([]);
    const [searching, setSearching] = useState(false);

    const handleScroll = () => {
        if (searching) return;
        const { scrollTop, clientHeight, scrollHeight } =
            document.documentElement;
        const threshold = 10;

        if (scrollTop + clientHeight >= scrollHeight - threshold) {
            setPageId((prevPageId) => prevPageId + 1);
        }
    };
    useEffect(() => {
        fetchGetAPIcards(setCards);
    }, []);

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
                    <Link
                        to="#"
                        onClick={(e) =>
                            handleScrollToTop(e, setPosts, setPageId, setSearching)
                        }
                    >
                        <img
                            src="../../../public/logoblack.png"
                            alt="logo"
                            className={`${styles.logolink}`}
                        />
                    </Link>
                    <Link
                        to="#"
                        onClick={(e) =>
                            handleScrollToTop(e, setPosts, setPageId, setSearching)
                        }
                        className={`${styles.link}`}
                    >
                        Wirtualna Politechnika
                    </Link>
                </div>
            </section>
            <section className={styles.posts}>
                <SearchBar setPosts={setPosts} setSearching={setSearching}/>
                <PostForm setPostUpdates={handlePostSubmit} />
                <Posts postsList={posts} />
            </section>
            <section className={`${styles.right} ${styles.side}`}>
                <div className={`${styles.buttons}`}>
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
                                marginLeft: "auto",
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
                <APIcards cardslist={cards} />
            </section>
        </div>
    );
};
