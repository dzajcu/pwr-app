import styles from '../styles/css/Login.module.css'
export const InputRounded = props => {
	return (
		<input
			className={`${styles.text_smaller} ${styles.box} ${styles.inputbox} ${props.classes}`}
			value={props.value}
			onChange={props.onChange}
			onBlur={props.onBlur}
			name={props.name}
			autoComplete={props.autocomplete}
			placeholder={props.placeholder}
			type={props.type}
		/>
	)
}
