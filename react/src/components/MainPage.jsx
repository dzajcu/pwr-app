import React, { useState, useEffect } from 'react'
import styles from './styles/css/MainPage.module.css'
import { PostForm } from './Posts/PostForm'
import { Posts } from './Posts/Posts'
import { fetchGetContent } from '../functions/fetchGetContent'

export const MainPage = props => {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		fetchGetContent(setPosts)
	}, [])

	const addPostHandler = post => {
		setPosts(prevPosts => [post, ...prevPosts])
	}

	return (
		<div className={styles.container}>
			<section className={`${styles.left} ${styles.side}`}></section>
			<section className={styles.posts}>
				<PostForm onAddPost={addPostHandler} />
				<Posts postsList={posts} />
			</section>
			<section className={`${styles.right} ${styles.side}`}></section>
		</div>
	)
}
