import axios from 'axios'

export default async function checkIn(userID: number, bookingID: number) {
	try {
		const response = await axios.post(`${process.env.NEXT_PUBLIC_ATTENDANCE_SERVICE_ENDPOINT}/checkin`, {
			userID,
			bookingID
		})
		return await response.data
	} catch (error) {
		console.log(error)
	}
}
