import axios from 'axios'

export default async function checkOut(userID: number, bookingID: number) {
	try {
		const response = await axios.post(`${process.env.NEXT_PUBLIC_ATTENDANCE_SERVICE_ENDPOINT}/checkout`, {
			userID,
			bookingID
		})
		return await response.data
	} catch (error) {
		console.log(error)
	}
}
