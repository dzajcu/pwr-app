import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/css/Header.module.css'
import { Link } from "react-router-dom"

export const HeaderBtn = props => {
	return (
		<Link to={props.path} className={`${styles.btn} ${styles.login} ${props.style}`}>
			<p>{props.text}</p>
			<FontAwesomeIcon className={styles.arrow} icon={faArrowRight} />
		</Link>
	)
}
