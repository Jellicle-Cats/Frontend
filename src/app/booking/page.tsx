import SeatMap from '@/components/SeatMap'
import Link from 'next/link'

export default function Booking() {
	return (
		<div>
			<div>Booking</div>
			<div>//Redirect to login if not login</div>
			<div>Please select seat</div>
			<Link href="/confirm" className="bg-pink-500 text-white rounded p-1 mt-2 hover:bg-pink-400">
				Next
			</Link>
			<div className="w-fit mx-auto border border-black">
				<SeatMap />
			</div>
		</div>
	)
}
