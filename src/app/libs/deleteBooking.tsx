import bookingClient from '../../grpc/booking-client'
import { BookingId } from '../../proto/booking_pb'

export default function deleteBooking(bookingId: number) {
	const request = new BookingId()
	request.setId(bookingId)

	return bookingClient.deleteBooking(request, {}, (error, response) => {
		if (error) {
			alert('Error cancel booking')
			console.error('Error cancel booking', error.code, error.message)
		} else {
			console.log('OK', response)
		}
	})
}
