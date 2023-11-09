import bookingClient from '../../grpc/booking-client'
import { BookingTime } from '../../proto/booking_pb'

export default function getUnavailableSeats(startTime: number, endTime: number, onData: (seats: number[]) => void) {
	const request = new BookingTime()
	request.setStarttime(startTime)
	request.setEndtime(endTime)
	console.log(startTime)
	console.log(request)

	return bookingClient.getUnavailableSeat(request, {}, (error, response) => {
		if (error) {
			console.error('Error fetching unavailable seats:', error.code, error.message)
		} else {
			// Extract the seatId values and return as an array of numbers
			const seatIds = response.getSeatsList().map((seat) => seat.getSeatid())
			console.log('Unavailable seat IDs:', seatIds)

			onData(seatIds)
		}
	})
}
