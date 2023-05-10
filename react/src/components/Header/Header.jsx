import React from "react";
import styles from "../styles/css/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../public/logo.png";
import { HeaderBtn } from "./HeaderBtn";

export const Header = () => {
    return (
        <div className={styles.bg}>
            <img className={styles.logo} src={logo} alt="logo pwr" />
            <div className={styles.container}>
                <div className={styles.text}>
                    <p className={styles.hasz}>#pwrapp</p>
                    <h1 className={styles.title}>
                        Wirtualna <br /> Politechnika
                    </h1>
                </div>

                <div className={styles.buttons}>
                    <HeaderBtn
                        path="/login"
                        text="Zaloguj się"
                        style={styles["login"]}
                    />
                    <HeaderBtn
                        path="/register"
                        text="Zarejestruj się"
                        style={styles["register"]}
                    />
                    <HeaderBtn
                        path="/mainpage"
                        text="Kontynuuj jako gość"
                        style={styles["guest"]}
                    />
                </div>
            </div>
        </div>
    );
};
