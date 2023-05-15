export const fetchPostContent = (post, tags) => {
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
