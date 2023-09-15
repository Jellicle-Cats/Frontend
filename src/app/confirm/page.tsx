import SeatMap from '@/components/SeatMap'
import Link from 'next/link'

export default function Confirm() {
	return (
		<div>
			<div className="py-4 text-4xl font-semibold text-center">Confirm Booking</div>
			<div className="rounded shadow-md border border-gray-300 w-fit mx-auto p-4">
				<div>Seat x1</div>
				<div>Time: 12:00 - 14:00</div>
				<div>Name Lastname</div>
				<Link
					href="/"
					className="w-full inline-block text-center bg-pink-500 text-white rounded p-1 mt-2 hover:bg-pink-400"
				>
					Confirm
				</Link>
			</div>
		</div>
	)
}
