import SeatMap from '@/components/SeatMap'
import Link from 'next/link'

export default function Booking() {
	return (
		<>
			<div className="text-4xl font-bold text-pink-500">Booking</div>
			<div>Please select seat</div>
			<div className="w-fit bg-pink-500 text-white rounded py-2 px-4 ml-auto hover:bg-pink-400 text-2xl font-semibold">
				<Link href="/confirm" className="">
					Next
				</Link>
			</div>
			<SeatMap mode="book" />
		</>
	)
}
