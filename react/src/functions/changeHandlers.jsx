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

export const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
