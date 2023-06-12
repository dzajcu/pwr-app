export const fetchPostContent = async (post, tags) => {
	try {
		const response = await fetch('http://localhost:8080/content', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + sessionStorage.getItem('userToken'),
			},
			body: JSON.stringify({
				title: 'Title',
				description: post,
				tags: tags,
			}),
		});

		if (!response.ok) {
			sessionStorage.removeItem('userToken');
			console.log(sessionStorage.getItem('userToken'));
			throw new Error('Network response was not ok');
		}

		const data = await response.json();
		// console.log("Data received:", data);
	} catch (error) {
		console.error('There was a problem with the fetch operation:', error);
	}
};
