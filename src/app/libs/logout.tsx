import axios from 'axios'

export default async function logout() {
	try {
		await axios.get(`${process.env.NEXT_PUBLIC_USER_SERVICE_ENDPOINT}/api/auth/logout`, {
			withCredentials: true
		})
	} catch (error) {
		console.log(error)
		// alert(error)
	}
}
