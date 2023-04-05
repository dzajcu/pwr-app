import React from "react";
import styles from "./styles/css/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import logo from "../../public/logo.png";

export const Header = () => {
    return (
        <div className={styles.bg}>
            <img className={styles.logo} src={logo} alt="logo pwr" />
            <div className={styles.container}>
                <div className={styles.text}>
                    <p className={styles.hasz}>#pwrapp</p>
                    <h1 className={styles.title}>
                        Wirtualna
                        <br />
                        Politechnika
                    </h1>
                </div>

                <div className={styles.buttons}>
                    <button className={`${styles.btn} ${styles.login}`}>
                        <p>Zaloguj się</p>
                        <FontAwesomeIcon
                            className={styles.arrow}
                            icon={faArrowRight}
                        />
                    </button>

                    <button className={`${styles.btn} ${styles.register}`}>
                        <p className={styles.buttons}>Zarejestruj się</p>
                        <FontAwesomeIcon
                            className={styles.arrow}
                            icon={faArrowRight}
                        />
                    </button>

                    <button className={`${styles.btn} ${styles.guest}`}>
                        <p className={styles.buttons}>Kontynuuj<br />jako gość</p>
                        <FontAwesomeIcon
                            className={styles.arrow}
                            icon={faArrowRight}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};
