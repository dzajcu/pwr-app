import React, { useState } from 'react'
import styles from '../styles/css/Login.module.css'
import logo from '../../../public/logo.png'
import { FaGoogle } from 'react-icons/fa'

export const Login = props => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	//Functionality after submitting
	const handleSubmit = e => {
		e.preventDefault()

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
					if (data[i].username.includes(username) && data[i].password.includes(password)) console.log('Zalogowano')
					else console.error('Niepoprawne dane!')
				})
			})
			.catch(error => {
				console.error('There was a problem with the fetch operation:', error)
			})

		setUsername('')
		setPassword('')
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
						className={`${styles.text_smaller} ${styles.box} ${styles.inputbox}`}
						value={username}
						onChange={e => setUsername(e.target.value)}
						type='email'
						placeholder='Adres e-mail lub nazwa użytkownika'
					/>
					<p className={`${styles.text_smaller} ${styles.input_title}`}>Hasło</p>

					<input
						className={`${styles.text_smaller} ${styles.box} ${styles.inputbox}`}
						value={password}
						onChange={e => setPassword(e.target.value)}
						type='password'
						placeholder='Hasło'
					/>
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
				<button
					className={`${styles.text_bigger} ${styles.box}  ${styles.btn}`}
					onClick={() => props.onFormSwitch('register')}>
					Zarejestruj się
				</button>
				<button className={`${styles.text_smaller} ${styles.guest}`}>Kontynuuj jako gość</button>
			</div>
		</div>
	)
}
