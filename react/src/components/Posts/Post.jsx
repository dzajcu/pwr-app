import React from 'react'
import { Tags } from './Tags'
import styles from '../styles/css/Post.module.css'
import moment from 'moment'
import 'moment/dist/locale/pl'

export const Post = props => {
	moment.locale('pl')
	const someDate = new Date(props.date)
	const formattedDateTime = moment(someDate).locale('pl').fromNow()
	console.log(formattedDateTime)
	console.log(someDate)

	return (
		<div className={styles.post}>
			<div className={styles.content}>
				<div className={styles.post_header}>
					<p className={styles.username}>Username</p>
					<div className={styles.dot}></div>
					<p className={styles.date}>{formattedDateTime}</p>
				</div>
				<Tags tagsList={props.tags} />
				<p className={styles.text}>{props.text}</p>
			</div>
		</div>
	)
}
