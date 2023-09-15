'use client'
import SeatMap from '@/components/SeatMap'

export default function Map() {
	return (
		<div>
			<div>Seat Map</div>
			<div className="w-fit mx-auto border border-black">
				<SeatMap />
			</div>
		</div>
	)
}
