import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/css/Header.module.css";

export const HeaderBtn = (props) => {
    return (
        <button className={`${styles.btn} ${styles.login} ${props.style}`} >
            <p>{props.text}</p>
            <FontAwesomeIcon className={styles.arrow} icon={faArrowRight} />
        </button>
    );
};
