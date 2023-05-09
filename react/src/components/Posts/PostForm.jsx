import React, { useState } from 'react'
import styles from '../styles/css/PostForm.module.css'

export const PostForm = props => {
	const [post, setPost] = useState({})
	const [characters, setCharacters] = useState(1000)

	const textHandler = e => {
		setCharacters(1000 - e.target.value.length)
		setPost(e.target.value)

		const textarea = e.target
		textarea.style.height = 'auto'
		textarea.style.height = `${textarea.scrollHeight}px`
	}

	const handleSubmit = e => {
		e.preventDefault()
		const symbols = /[&/\\,+()$~%.'"*?<>{}]/g
		const tags = post
			.replace(symbols, ' ')
			.split(' ')
			.filter(word => word[0] === '#' && word.length > 2)
		console.log(tags)

		fetch('http://localhost:8080/content', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title: 'Title',
				description: post,
				tags: tags,
				creationTime: '',
			}),
		})
			.then(response => {
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				return response.json()
			})
			.then(data => {
				// console.log("Data received:", data);
			})
			.catch(error => {
				console.error('There was a problem with the fetch operation:', error)
			})
	}

	return (
		<div className='container'>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={`${styles.grow_wrap}`}>
					<textarea
						name='text'
						id='text'
						// onInput="this.parentNode.dataset.replicatedValue = this.value"
						onInput={textHandler}
						className={`${styles.inputbox}`}
						type='text'
						placeholder='Napisz coś...'
						maxLength='1000'
					/>
				</div>

				<p className={`${styles.counter}`}>Pozostałe znaki: {characters}/1000</p>
				<button className={`${styles.btn}`} type='submit'>
					Opublikuj
				</button>
			</form>
		</div>
	)
}
