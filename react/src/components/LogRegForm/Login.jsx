import React, { useState, useEffect } from 'react'
import styles from '../styles/css/Login.module.css'
import logo from '../../../public/logo.png'
import { FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { clearInputsLogin } from '../../functions/clearInputs'
import { loginInputChangeHandler, passwordInputChangeHandler } from '../../functions/changeHandlers'
import { setTouchedFalseLogin, setTouchedTrueLogin } from '../../functions/setTouched'
import { fetchGetUser } from '../../functions/fetchGetUser'
import { InputRounded } from '../reusable/InputRounded'
import { LinkRounded } from '../reusable/LinkRounded'

export const Login = props => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [formIsValid, setFormIsValid] = useState(false)

	const [loginTouched, setLoginTouched] = useState(false)
	const [passwordTouched, setPasswordTouched] = useState(false)

	const [authentication, setAuthentication] = useState(true)

	const loginIsValid = login.trim() !== ''
	const loginInputIsInvalid = !loginIsValid && loginTouched

	const passwordIsValid = password.trim() !== ''
	const passwordInputIsInvalid = !passwordIsValid && passwordTouched

	const navigation = useNavigate()

	useEffect(() => {
		if (loginIsValid && passwordIsValid) {
			setFormIsValid(true)
		} else {
			setFormIsValid(false)
		}
	}, [loginIsValid, passwordIsValid])
	const handleSubmit = async e => {
		e.preventDefault()
		setTouchedTrueLogin(setLoginTouched, setPasswordTouched)
		if (!formIsValid) return
		await fetchGetUser(login, password, setAuthentication, navigation)

	}

	return (
		<div className={styles.bg}>
			<img className={styles.logo} src={logo} alt='logo pwr' />
			<div className={`${styles.container} ${styles.container_bg}`}>
				<h3 className={styles.title}>Wirtualna Politechnika</h3>
				<p className={styles.text_bigger}>Zaloguj się, aby kontynuować.</p>
				<button className={`${styles.box} ${styles.google} ${styles.btn}`}>
					<span className={styles.icon}>
						<FaGoogle />
					</span>
					<p className={styles.text_bigger}>Kontynuuj z Google</p>
				</button>
				<div className={styles.or_line}>
					<p className={styles.text_smaller}>lub</p>
				</div>

				<form className={styles.form} onSubmit={handleSubmit}>
					<p className={`${styles.text_smaller} ${styles.input_title}`}>Adres e-mail lub nazwa użytkownika</p>
					<InputRounded
						classes={`${loginInputIsInvalid ? styles.validate_error_border : ''}`}
						value={login}
						onChange={e => loginInputChangeHandler(e, setLogin)}
						placeholder='Adres e-mail lub nazwa użytkownika'
					/>
					{loginInputIsInvalid && <p className={`${styles.validate_error}`}>Pole nie może być puste!</p>}

					<p className={`${styles.text_smaller} ${styles.input_title}`}>Hasło</p>
					<InputRounded
						classes={`${passwordInputIsInvalid ? styles.validate_error_border : ''}`}
						value={password}
						onChange={e => passwordInputChangeHandler(e, setPassword)}
						type='password'
						placeholder='Hasło'
					/>
					{passwordInputIsInvalid && <p className={`${styles.validate_error}`}>Pole nie może być puste!</p>}
					{!authentication && <p className={`${styles.validate_error}`}>Niepoprawny login/e-mail lub hasło!</p>}

					<button className={`${styles.text_smaller} ${styles.remind}`}>Nie pamiętasz hasła?</button>
					<div className={styles.footer}>
						<div className={styles.checkbox}>
							<input type='checkbox' id='task-1' />
							<label htmlFor='task-1'>
								<span className={styles.custom_checkbox}></span>
								<span className={styles.text_smaller}>Zapamiętaj mnie</span>
							</label>
						</div>
						<button className={`${styles.text_bigger} ${styles.submit} ${styles.box} ${styles.btn}`} type='submit'>
							Zaloguj się
						</button>
					</div>
				</form>
				<span className={styles.line}></span>
				<p className={styles.text_bigger}>Nie posiadasz konta?</p>
				<LinkRounded text='Zarejestruj się' to='/register' />
				<Link to='/mainpage' className={`${styles.text_smaller} ${styles.guest}`}>
					Kontynuuj jako gość
				</Link>
			</div>
		</div>
	)
}
