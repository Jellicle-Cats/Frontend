import axios from 'axios'

export default async function getSeatsByFloor(floor: string) {
	try {
		const response = await axios.get(`${process.env.NEXT_PUBLIC_SEAT_SERVICE_ENDPOINT}/floor/${floor}`, {
			withCredentials: true
		})
		console.log(response.data)
		return await response.data
	} catch (error) {
		console.log(error)
	}
}
