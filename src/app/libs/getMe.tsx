import axios from 'axios'

export default async function getMe() {
	try {
		const response = await axios.get(`http://localhost:8000/api/users/me`, {
			withCredentials: true
		})
		return await response.data.data.user
	} catch (error) {
		console.log(error)
	}
}
