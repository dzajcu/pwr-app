export const fetchGetContent = setPosts => {
	fetch('http://localhost:8080/content', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + sessionStorage.getItem('userToken'),
		},
	})
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok')
			}
			return response.json()
		})
		.then(data => {
			setPosts(data)
		})
		.catch(error => {
			console.error('There was a problem with the fetch operation:', error)
		})
}
