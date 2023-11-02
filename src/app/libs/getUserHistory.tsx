import axios from 'axios'

export default async function getUserHistory(userId:number) {
	try {
		const response = await axios.get(`${process.env.NEXT_PUBLIC_USER_SERVICE_ENDPOINT}/api/users/bookinglist?userId=${userId}`, {
			withCredentials: true
		})
        console.log(response.data.bookings)
		return await response.data.bookings
	} catch (error) {
		console.log(error)
	}
}