import { fetchGetContentByTag } from "./fetchGetContentByTag";
import { fetchGetContent } from "./fetchGetContent";

export const emailInputChangeHandler = (e, setEmail) => {
    setEmail(e.target.value);
};

export const usernameInputChangeHandler = (e, setUsername) => {
    setUsername(e.target.value);
};

export const passwordInputChangeHandler = (e, setPassword) => {
    setPassword(e.target.value);
};

export const passwordValidatedInputChangeHandler = (
    e,
    setPasswordValidated
) => {
    setPasswordValidated(e.target.value);
};

export const loginInputChangeHandler = (e, setLogin) => {
    setLogin(e.target.value);
};

export const handleScrollToTop = (e, setPosts, setPageId, setSearching) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPageId(1);
    setSearching(false);
    setPosts([]);
    fetchGetContent(setPosts, 1);
};

export const tagSearchHandler = (e, tag, setPosts, setPrefix, setTags, setSearching) => {
    setSearching(true);
    setTags([]);
    setPrefix("");
    fetchGetContentByTag(tag, setPosts);
};

export const refreshPostsHandler = (setRefreshPosts) => {
    setRefreshPosts((prevState) => !prevState);
};
