import bookingClient from '../../grpc/booking-client'
import { BookingRequest, BookingTime, Seat, UserId } from '../../proto/booking_pb'

export default function CreateBooking(user: UserId, bookingTime: BookingTime, seat: Seat) {
	const request = new BookingRequest()
	request.setUser(user)
	request.setBookingtime(bookingTime)
	request.setSeat(seat)
	request.setStatus(1)

	return bookingClient.createBooking(request, {}, (error, response) => {
		if (error) {
			console.error('Error createBooking', error.code, error.message)
		} else {
			console.log('OK', response)
		}
	})
}
