import React, { useEffect, useState } from 'react'
import styles from '../styles/css/Login.module.css'
import logo from '../../../public/logo.png'
import { FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

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

	const emailInputBlurHandler = e => {
		setEmail(e.target.value)
		setEmailTouched(true)
	}

	const usernameInputBlurHandler = e => {
		setUsername(e.target.value)
		setUsernameTouched(true)
	}

	const passwordInputBlurHandler = e => {
		setPassword(e.target.value)
		setPasswordTouched(true)
	}

	const passwordValidatedInputBlurHandler = e => {
		setPasswordValidatedTouched(true)
	}

	const emailInputChangeHandler = e => {
		setEmail(e.target.value)
	}

	const usernameInputChangeHandler = e => {
		setUsername(e.target.value)
	}

	const passwordInputChangeHandler = e => {
		setPassword(e.target.value)
	}

	const passwordValidatedInputChangeHandler = e => {
		setPasswordValidated(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()

		if (!formIsValid) {
			return
		}

		fetch('http://localhost:8080/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: username,
				email: email,
				password: password,
			}),
		})
			.then(response => {
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				return response.json()
			})
			.then(data => {
				console.log('Data received:', data)
			})
			.catch(error => {
				console.error('There was a problem with the fetch operation:', error)
			})

		setEmail('')
		setUsername('')
		setPassword('')
		setPasswordValidated('')
        
		setEmailTouched(false)
		setUsernameTouched(false)
		setPasswordTouched(false)
		setPasswordValidatedTouched(false)
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

					<input
						className={`${styles.text_smaller} ${styles.box} ${styles.inputbox}`}
						value={email}
						onChange={emailInputChangeHandler}
						onBlur={emailInputBlurHandler}
						type='email'
						name='email'
						autocomplete='email'
						placeholder='Adres e-mail'
					/>
					{emailInputIsInvalid && <p>Pole nie może być puste!</p>}
					<p className={`${styles.text_smaller} ${styles.input_title}`}>Nazwa użytkownika</p>

					<input
						className={`${styles.text_smaller} ${styles.box} ${styles.inputbox}`}
						value={username}
						onChange={usernameInputChangeHandler}
						onBlur={usernameInputBlurHandler}
						type='text'
						name='username'
						placeholder='Nazwa użytkownika'
					/>
					{usernameInputIsInvalid && <p>Pole nie może być puste!</p>}
					<p className={`${styles.text_smaller} ${styles.input_title}`}>Hasło</p>
					<input
						className={`${styles.text_smaller} ${styles.box} ${styles.inputbox}`}
						value={password}
						onChange={passwordInputChangeHandler}
						onBlur={passwordInputBlurHandler}
						type='password'
						placeholder='Hasło'
					/>
					{passwordInputIsInvalid && <p>Pole nie może być puste!</p>}
					<p className={`${styles.text_smaller} ${styles.input_title}`}>Powtórz hasło</p>

					<input
						className={`${styles.text_smaller} ${styles.box} ${styles.inputbox}`}
						value={passwordValidated}
						onChange={passwordValidatedInputChangeHandler}
						onBlur={passwordValidatedInputBlurHandler}
						type='password'
						placeholder='Powtórz hasło'
					/>
					{passwordValidatedInputIsInvalid && <p>Pole nie może być puste!</p>}

					<button
						className={`${styles.text_bigger} ${styles.submit} ${styles.register} ${styles.box} ${styles.btn}`}
						type='submit'
						disabled={!formIsValid}>
						Utwórz konto
					</button>
					{!formIsValid && usernameTouched && emailTouched && passwordTouched && passwordValidatedTouched && (
						<p>Uzupełnij poprawnie wszystkie pola!</p>
					)}
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
