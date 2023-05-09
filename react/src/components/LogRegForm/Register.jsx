import React, { useState } from 'react'
import styles from '../styles/css/Login.module.css'
import logo from '../../../public/logo.png'
import { FaGoogle } from 'react-icons/fa'

export const Register = props => {
	const [email, setEmail] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [passwordValidated, setPasswordValidated] = useState('')
	//Functionality after submitting
	const handleSubmit = e => {
		e.preventDefault()
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
						onChange={e => setEmail(e.target.value)}
						type='email'
						name='email'
						autocomplete='email'
						placeholder='Adres e-mail'
					/>
					<p className={`${styles.text_smaller} ${styles.input_title}`}>Nazwa użytkownika</p>

					<input
						className={`${styles.text_smaller} ${styles.box} ${styles.inputbox}`}
						value={username}
						onChange={e => setUsername(e.target.value)}
						type='text'
						name='username'
						placeholder='Nazwa użytkownika'
					/>
					<p className={`${styles.text_smaller} ${styles.input_title}`}>Hasło</p>

					<input
						className={`${styles.text_smaller} ${styles.box} ${styles.inputbox}`}
						value={password}
						onChange={e => setPassword(e.target.value)}
						type='password'
						placeholder='Hasło'
					/>
					<p className={`${styles.text_smaller} ${styles.input_title}`}>Powtórz hasło</p>

					<input
						className={`${styles.text_smaller} ${styles.box} ${styles.inputbox}`}
						value={passwordValidated}
						onChange={e => setPasswordValidated(e.target.value)}
						type='password'
						placeholder='Powtórz hasło'
					/>

					<button
						className={`${styles.text_bigger} ${styles.submit} ${styles.register} ${styles.box} ${styles.btn}`}
						type='submit'>
						Utwórz konto
					</button>
				</form>
				<span className={styles.line}></span>
				<p className={styles.text_bigger}>Masz już konto?</p>
				<button
					className={`${styles.text_bigger} ${styles.box} ${styles.btn}`}
					onClick={() => props.onFormSwitch('login')}>
					Zaloguj się
				</button>
				<button className={`${styles.text_smaller} ${styles.guest}`}>Kontynuuj jako gość</button>
			</div>
		</div>
	)
}
