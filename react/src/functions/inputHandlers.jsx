import { fetchGetTags } from "./fetchGetTags";

export const textInputHandler = (e, setCharacters, setPost) => {
    setCharacters(1000 - e.target.value.length);
    setPost(e.target.value);
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
};

export const searchInputChangeHandler = (e, setTags, setPrefix) => {
    let timeoutId;
    clearTimeout(timeoutId);
    setPrefix(e.target.value);
    timeoutId = setTimeout(() => {
        fetchGetTags(setTags, e.target.value);
    }, 1000);
};


