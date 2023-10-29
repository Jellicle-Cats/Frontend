import axios from 'axios'

export default async function getSeat(seatId: string) {
	try {
		const response = await axios.get(`${process.env.NEXT_PUBLIC_SEAT_SERVICE_ENDPOINT}/${seatId}`, {
			withCredentials: true
		})
		return await response.data
	} catch (error) {
		console.log(error)
	}
}
