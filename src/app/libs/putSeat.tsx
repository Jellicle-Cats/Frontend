import axios from 'axios'

export default async function putSeat(seatId: string, body: object) {
	try {
		const response = await axios.put(`${process.env.NEXT_PUBLIC_SEAT_SERVICE_ENDPOINT}/${seatId}`, body, {
			withCredentials: true
		})
		return await response.data
	} catch (error) {
		console.log(error)
	}
}
