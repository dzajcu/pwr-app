export const fetchGetUser = (login, password) => {
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
}
