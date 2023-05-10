import React, { useState, useEffect } from 'react'
import styles from '../styles/css/Login.module.css'
import logo from '../../../public/logo.png'
import { FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Login = props => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [formIsValid, setFormIsValid] = useState(false)

	const [loginTouched, setLoginTouched] = useState(false)
	const [passwordTouched, setPasswordTouched] = useState(false)

	const loginIsValid = login.trim() !== ''
	const loginInputIsInvalid = !loginIsValid && loginTouched

	const passwordIsValid = password.trim() !== ''
	const passwordInputIsInvalid = !passwordIsValid && passwordTouched

	useEffect(() => {
		if (loginIsValid && passwordIsValid) {
			setFormIsValid(true)
		} else {
			setFormIsValid(false)
		}
	}, [loginIsValid, passwordIsValid])

	const loginInputChangeHandler = e => {
		setLogin(e.target.value)
	}

	const passwordInputChangeHandler = e => {
		setPassword(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()

		setLoginTouched(true)
		setPasswordTouched(true)

		if (!formIsValid) {
			return
		}

		fetch('http://localhost:8080/users', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(response => {
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				return response.json()
			})
			.then(data => {
				data.forEach(function (_, i) {
					if (data[i].login.includes(login) && data[i].password.includes(password)) console.log('Zalogowano')
					else console.error('Niepoprawne dane!')
				})
			})
			.catch(error => {
				console.error('There was a problem with the fetch operation:', error)
			})

		setLogin('')
		setPassword('')

		setLoginTouched(false)
		setPasswordTouched(false)
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

					<input
						className={`${styles.text_smaller} ${styles.box} ${styles.inputbox} ${
							loginInputIsInvalid ? styles.validate_error_border : ''
						}`}
						value={login}
						onChange={loginInputChangeHandler}
						placeholder='Adres e-mail lub nazwa użytkownika'
					/>
					{loginInputIsInvalid && <p className={`${styles.validate_error}`}>Pole nie może być puste!</p>}
					<p className={`${styles.text_smaller} ${styles.input_title}`}>Hasło</p>

					<input
						className={`${styles.text_smaller} ${styles.box} ${styles.inputbox} ${
							passwordInputIsInvalid ? styles.validate_error_border : ''
						}`}
						value={password}
						onChange={passwordInputChangeHandler}
						type='password'
						placeholder='Hasło'
					/>
					{passwordInputIsInvalid && <p className={`${styles.validate_error}`}>Pole nie może być puste!</p>}
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
				<Link to='/register' className={`${styles.text_bigger} ${styles.box}  ${styles.btn}`}>
					Zarejestruj się
				</Link>
				<Link to='/mainpage' className={`${styles.text_smaller} ${styles.guest}`}>
					Kontynuuj jako gość
				</Link>
			</div>
		</div>
	)
}
