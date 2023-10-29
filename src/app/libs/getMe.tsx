import axios from 'axios'

export default async function getMe() {
	try {
		const response = await axios.get(`${process.env.NEXT_PUBLIC_USER_SERVICE_ENDPOINT}/api/users/me`, {
			withCredentials: true
		})
		return await response.data.data.user
	} catch (error) {
		console.log(error)
	}
}
