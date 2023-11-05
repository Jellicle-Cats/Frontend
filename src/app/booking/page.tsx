'use client'
import SeatMap from '@/components/SeatMap'
import TimeRangeSelector from '@/components/TimeRangeSelector'
import { useEffect, useState } from 'react'
import getMe from '../libs/getMe'
import { getGoogleUrl } from '@/utils/getGoogleUrl'
import { usePathname, useRouter } from 'next/navigation'
import { BookingTime, Seat, UserId } from '@/proto/booking_pb'
import getTimeForToday from '@/utils/getTimeForToday'
import createBooking from '../libs/CreateBooking'

export default function Booking() {
	const now = new Date()
	now.setMinutes(Math.ceil(now.getMinutes() / 60) * 60) // Round the minutes up to the next hour
	const router = useRouter()

	const [startTime, setStartTime] = useState(now.toTimeString().slice(0, 5))
	const [duration, setDuration] = useState(1) // Default duration is 1 hour
	const [selectedSeat, setSelectdSeat] = useState<number>(0)
	const [user, setUser] = useState<any>()

	const from = usePathname()

	const fetchUser = async () => {
		const response = await getMe()
		// console.log(response)
		if (!response) {
			router.push(getGoogleUrl(from))
		}
		setUser(response)
	}

	useEffect(() => {
		fetchUser()
	}, [])

	const start = getTimeForToday(startTime)
	const end = getTimeForToday(startTime)
	end.setHours(start.getHours() + duration)

	const handleCreateBooking = () => {
		const userId = new UserId()
		userId.setUserid(user.userId)
		const bookingTime = new BookingTime()
		bookingTime.setStarttime(start.getTime() / 1000)
		bookingTime.setEndtime(end.getTime() / 1000)
		const seat = new Seat()
		seat.setSeatid(selectedSeat)
		createBooking(userId, bookingTime, seat)
		alert('Booking Created')
		router.push('/account')
	}

	return (
		<>
			<div className="text-4xl font-bold text-pink-500">Booking</div>
			<div>Please select seat</div>
			<TimeRangeSelector
				startTime={startTime}
				duration={duration}
				setStartTime={setStartTime}
				setDuration={setDuration}
			/>
			{!!selectedSeat && (
				<button
					className="w-full bg-pink-500 text-white rounded py-2 px-4 mt-2 mb-4 ml-auto hover-bg-pink-400 text-2xl font-semibold hover:bg-pink-400"
					onClick={() => handleCreateBooking()}
				>
					Book
				</button>
			)}
			<SeatMap
				mode="book"
				startTime={startTime}
				duration={duration}
				selectedSeat={selectedSeat}
				setSelectdSeat={setSelectdSeat}
			/>
		</>
	)
}
