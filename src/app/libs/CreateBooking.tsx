import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import bookingClient from '../../grpc/booking-client'
import { BookingRequest, BookingTime, Seat, UserId } from '../../proto/booking_pb'

export default function createBooking(user: UserId, bookingTime: BookingTime, seat: Seat, router: AppRouterInstance) {
	const request = new BookingRequest()
	request.setUser(user)
	request.setBookingtime(bookingTime)
	request.setSeat(seat)
	request.setStatus(1)

	return bookingClient.createBooking(request, {}, (error, response) => {
		if (error) {
			alert('Error: booking overlap')
			console.error('Error createBooking', error.code, error.message)
		} else {
			alert('Booking created')
			console.log('OK', response)
		}
		router.push('/account')
	})
}
