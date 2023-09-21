'use client'
import SeatMap from '@/components/SeatMap'

export default function Map() {
	return (
		<>
			<div className="text-4xl font-bold text-pink-500">Seat Map</div>
			<div className="flex justify-between border-4 border-pink-500 rounded-lg shadow">
				<div className="w-fit mx-auto">
					<SeatMap />
				</div>
			</div>
		</>
	)
}
