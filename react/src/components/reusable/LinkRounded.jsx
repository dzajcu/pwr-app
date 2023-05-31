import styles from '../styles/css/Login.module.css'
import { Link } from 'react-router-dom'

export const LinkRounded = props => {
	return (
		<Link
			to={props.to}
			className={`${styles.text_bigger} ${styles.box} ${styles.btn}`}
			style={props.style}
			onClick={props.onClick}>
			{props.text}
		</Link>
	)
}
