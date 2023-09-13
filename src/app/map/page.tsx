'use client'
import Seat from '@/components/seats/Seat'
import Image from 'next/image'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

export default function Map() {
	const positions = [
		{ top: 282, left: 927 },
		{ top: 303, left: 927 },
		{ top: 316, left: 927 },
		{ top: 339, left: 927 },
		{ top: 352, left: 927 },
		{ top: 374, left: 927 },
		{ top: 387, left: 927 },
		{ top: 408, left: 927 }
	]
	return (
		<div>
			<div>Seat Map</div>
			<div className="w-fit mx-auto border border-black">
				<TransformWrapper>
					<TransformComponent>
						<Image
							src={'/img/floor1.png'}
							width={1000}
							height={1000}
							className="min-w-[1000px]"
							alt="floor 1 map"
						/>
						{positions.map(({ top, left }) => (
							<Seat top={top} left={left} />
						))}
					</TransformComponent>
				</TransformWrapper>
			</div>
		</div>
	)
}
