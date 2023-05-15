import React, { useEffect, useState } from 'react'
import styles from '../styles/css/Login.module.css'
import logo from '../../../public/logo.png'
import { FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { fetchPostUser } from '../../functions/fetchPostUser'
import {
	emailInputBlurHandler,
	usernameInputBlurHandler,
	passwordInputBlurHandler,
	passwordValidatedInputBlurHandler,
} from '../../functions/blurHandlers'
import {
	emailInputChangeHandler,
	usernameInputChangeHandler,
	passwordInputChangeHandler,
	passwordValidatedInputChangeHandler,
} from '../../functions/changeHandlers'
import { setTouchedTrueRegister, setTouchedFalseRegister } from '../../functions/setTouched'
import { clearInputsRegister } from '../../functions/clearInputs'
import { InputRounded } from './InputRounded'

export const Register = props => {
	const [email, setEmail] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [passwordValidated, setPasswordValidated] = useState('')
	const [formIsValid, setFormIsValid] = useState(false)

	const [emailTouched, setEmailTouched] = useState(false)
	const [usernameTouched, setUsernameTouched] = useState(false)
	const [passwordTouched, setPasswordTouched] = useState(false)
	const [passwordValidatedTouched, setPasswordValidatedTouched] = useState(false)

	const emailIsValid = email.trim() !== ''
	const emailInputIsInvalid = !emailIsValid && emailTouched

	const usernameIsValid = username.trim() !== ''
	const usernameInputIsInvalid = !usernameIsValid && usernameTouched

	const passwordIsValid = password.trim() !== ''
	const passwordInputIsInvalid = !passwordIsValid && passwordTouched

	const passwordValidatedIsValid = passwordValidated.trim() !== ''
	const passwordValidatedInputIsInvalid = !passwordValidatedIsValid && passwordValidatedTouched

	useEffect(() => {
		if (emailIsValid && usernameIsValid && passwordIsValid && passwordValidatedIsValid) {
			setFormIsValid(true)
		} else {
			setFormIsValid(false)
		}
	}, [emailIsValid, usernameIsValid, passwordIsValid, passwordValidatedIsValid])

	const handleSubmit = e => {
		e.preventDefault()
		setTouchedTrueRegister(setEmailTouched, setUsernameTouched, setPasswordTouched, setPasswordValidatedTouched)
		if (!formIsValid) {
			return
		}
		fetchPostUser(username, email, password)
		clearInputsRegister(setEmail, setUsername, setPassword, setPasswordValidated)
		setTouchedFalseRegister(setEmailTouched, setUsernameTouched, setPasswordTouched, setPasswordValidatedTouched)
	}
	return (
		<div className={styles.bg}>
			<div className={styles.overlay}>
				<img className={styles.logo} src={logo} alt='logo pwr' />
			</div>
			<div className={`${styles.container} ${styles.container_bg}`}>
				<h3 className={styles.title}>Wirtualna Politechnika</h3>
				<p className={styles.text_bigger}>Zarejestruj się, aby kontynuować.</p>
				<button className={`${styles.box} ${styles.google} ${styles.btn}`}>
					<span className={styles.icon}>
						<FaGoogle />
					</span>
					<p className={styles.text_bigger}>Zarejestruj z Google</p>
				</button>
				<div className={styles.or_line}>
					<p className={styles.text_smaller}>lub</p>
				</div>

				<form className={styles.form} onSubmit={handleSubmit}>
					<p className={`${styles.text_smaller} ${styles.input_title}`}>Adres e-mail</p>
					<InputRounded
						classes={`${emailInputIsInvalid ? styles.validate_error_border : ''}`}
						value={email}
						onChange={e => emailInputChangeHandler(e, setEmail)}
						onBlur={e => emailInputBlurHandler(e, setEmailTouched)}
						name='email'
						autocomplete='email'
						placeholder='Adres e-mail'
					/>
					{emailInputIsInvalid && <p className={`${styles.validate_error}`}>Pole nie może być puste!</p>}

					<p className={`${styles.text_smaller} ${styles.input_title}`}>Nazwa użytkownika</p>
					<InputRounded
						classes={`${usernameInputIsInvalid ? styles.validate_error_border : ''}`}
						value={username}
						onChange={e => usernameInputChangeHandler(e, setUsername)}
						onBlur={e => usernameInputBlurHandler(e, setUsernameTouched)}
						type='text'
						name='username'
						placeholder='Nazwa użytkownika'
					/>
					{usernameInputIsInvalid && <p className={`${styles.validate_error}`}>Pole nie może być puste!</p>}

					<p className={`${styles.text_smaller} ${styles.input_title}`}>Hasło</p>
					<InputRounded
						classes={`${passwordInputIsInvalid ? styles.validate_error_border : ''}`}
						value={password}
						onChange={e => passwordInputChangeHandler(e, setPassword)}
						onBlur={e => passwordInputBlurHandler(e, setPasswordTouched)}
						type='password'
						placeholder='Hasło'
					/>
					{passwordInputIsInvalid && <p className={`${styles.validate_error}`}>Pole nie może być puste!</p>}

					<p className={`${styles.text_smaller} ${styles.input_title}`}>Powtórz hasło</p>
					<InputRounded
						classes={`${passwordValidatedInputIsInvalid ? styles.validate_error_border : ''}`}
						value={passwordValidated}
						onChange={e => passwordValidatedInputChangeHandler(e, setPasswordValidated)}
						onBlur={e => passwordValidatedInputBlurHandler(e, setPasswordValidatedTouched)}
						type='password'
						placeholder='Powtórz hasło'
					/>
					{(passwordValidatedInputIsInvalid && (
						<p className={`${styles.validate_error}`}>Pole nie może być puste!</p>
					)) ||
						(password !== passwordValidated && passwordTouched && passwordValidatedTouched && passwordIsValid && (
							<p className={`${styles.validate_error}`}>Hasła nie są takie same!</p>
						))}
					<button
						className={`${styles.text_bigger} ${styles.submit} ${styles.register} ${styles.box} ${styles.btn}`}
						type='submit'>
						Utwórz konto
					</button>
				</form>
				<span className={styles.line}></span>
				<p className={styles.text_bigger}>Masz już konto?</p>
				<Link to='/login' className={`${styles.text_bigger} ${styles.box} ${styles.btn}`}>
					Zaloguj się
				</Link>
				<Link to='/mainpage' className={`${styles.text_smaller} ${styles.guest}`}>
					Kontynuuj jako gość
				</Link>
			</div>
		</div>
	)
}
