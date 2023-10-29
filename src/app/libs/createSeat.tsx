import axios from 'axios'

export default async function createSeat(body: object) {
	try {
		const response = await axios.post(`${process.env.NEXT_PUBLIC_SEAT_SERVICE_ENDPOINT}`, body, {
			withCredentials: true
		})
		return await response.data
	} catch (error) {
		console.log(error)
	}
}
