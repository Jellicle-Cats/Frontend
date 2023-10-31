'use client';
import Seat from '@/components/Seat';
import Image from 'next/image';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import FloorButton from './FloorButton';
import { useEffect, useState } from 'react';
import getSeatsByFloor from '@/app/libs/getSeatsByFloor';

export default function SeatMap({
	mode,
	startTime,
	duration,
}: {
	mode?: string;
	startTime?: string;
	duration?: number;
}) {
	const [selectedFloor, setSelectedFloor] = useState<string>('1');
	const [seats, setSeats] = useState<any[]>([]);

	// add fetch by time
	// need to handle if startTime less than current time that mean it's the next day
	// lets say duration = 0 then its mean real time availability
	useEffect(() => {
		const fetchSeats = async () => {
			const response = await getSeatsByFloor(selectedFloor);
			setSeats(response);
		};
		fetchSeats();
	}, [selectedFloor, startTime, duration]);

	return (
		<>
			<div className="my-2 flex gap-2">
				<FloorButton
					floor="B"
					selectedFloor={selectedFloor}
					setSelectedFloor={setSelectedFloor}
				/>
				<FloorButton
					floor="1"
					selectedFloor={selectedFloor}
					setSelectedFloor={setSelectedFloor}
				/>
				<FloorButton
					floor="M"
					selectedFloor={selectedFloor}
					setSelectedFloor={setSelectedFloor}
				/>
				<FloorButton
					floor="2"
					selectedFloor={selectedFloor}
					setSelectedFloor={setSelectedFloor}
				/>
				<FloorButton
					floor="3"
					selectedFloor={selectedFloor}
					setSelectedFloor={setSelectedFloor}
				/>
				<FloorButton
					floor="4"
					selectedFloor={selectedFloor}
					setSelectedFloor={setSelectedFloor}
				/>
				<FloorButton
					floor="5"
					selectedFloor={selectedFloor}
					setSelectedFloor={setSelectedFloor}
				/>
				<FloorButton
					floor="6"
					selectedFloor={selectedFloor}
					setSelectedFloor={setSelectedFloor}
				/>
				<FloorButton
					floor="7"
					selectedFloor={selectedFloor}
					setSelectedFloor={setSelectedFloor}
				/>
			</div>
			<div className="flex flex-col justify-between border-4 border-pink-500 rounded-lg shadow mt-4">
				<div className="w-fit mx-auto">
					<TransformWrapper>
						<TransformComponent>
							<Image
								src={`/img/floor${selectedFloor}.png`}
								width={1000}
								height={1000}
								className="min-w-[1000px]"
								alt="floor 1 map"
							/>
							{seats?.map(({ id, isOpen, top, left }) => (
								<Seat
									id={id}
									top={top}
									left={left}
									isOpen={isOpen}
									key={id}
									mode={mode}
								/>
							))}
						</TransformComponent>
					</TransformWrapper>
				</div>
			</div>
		</>
	);
}
