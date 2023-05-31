import { useNavigate } from "react-router-dom";


export const fetchGetUser = (username, password, userToken, navigation, setAuthentication) => {

	fetch('http://localhost:8080/user/auth/authenticate', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			userName: username,
			password: password,
		}),
	})
		.then(response => {
			if (!response.ok) {
				setAuthentication(false);
				throw new Error('Network respone was not ok')
			}
			return response.json()
		})
		.then(data => {
			userToken = data;
			navigation('/mainpage');
		})
		.catch(error => {
			console.error('There was a problem with the fetch operation:', error)
		})
}
