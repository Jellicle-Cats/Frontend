import SeatMap from '@/components/SeatMap'
import Link from 'next/link'

export default function Confirm() {
	return (
		<>
			<div className="text-4xl font-bold text-pink-500">Confirm Booking</div>
			<div className="flex justify-between border-4 border-pink-500 rounded-lg shadow flex-col p-6 text-xl gap-2">
				<div>Seat x1</div>
				<div>Time: 12:00 - 14:00</div>
				<div>Name Lastname</div>
				<Link
					href="/"
					className="w-full inline-block text-center bg-pink-500 text-white rounded p-1 mt-2 text-2xl hover:bg-pink-400"
				>
					Confirm
				</Link>
			</div>
		</>
	)
}
