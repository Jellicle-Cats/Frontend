'use client';
import Seat from '@/components/Seat';
import Image from 'next/image';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import FloorButton from './FloorButton';
import { useEffect, useState } from 'react';
import getSeatsByFloor from '@/app/libs/getSeatsByFloor';
import getUnavailableSeats from '@/app/libs/getUnavailableSeat';

function getTimeForToday(time: string): Date {
	// Validate the time format with a simple regex
	const timePattern = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

	if (!timePattern.test(time)) {
		throw new Error("Invalid time format. It should be HH:mm");
	}

	const [hours, minutes] = time.split(":").map(Number);

	const date = new Date();
	date.setHours(hours, minutes, 0, 0);  // Set hours, minutes, and reset seconds and milliseconds

	return date;
}

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
			const seats = await getSeatsByFloor(selectedFloor);
			if (startTime != null && duration != null) {
				const start = getTimeForToday(startTime);
				const end = start;
				end.setHours(start.getHours() + duration);

				const unavailableSeatsStream = getUnavailableSeats(start.getTime() * 1000, end.getTime() * 1000, (seats) => {
					const unavailableSeat = new Set(seats);
					setSeats((prevSeats) => prevSeats.map((seat) => ({
						...seat,
						isOccupied: unavailableSeat.has(seat.id),
					})))
				});

				unavailableSeatsStream.on("status", function (status) {
					console.log(status.code, status.details, status.metadata);
				});

				unavailableSeatsStream.on("end", () => {
					console.log("Stream ended.");
				});
			}
			setSeats(seats);
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
							{seats?.map(({ id, isOpen, isOccupied, top, left }) => (
								<Seat
									id={id}
									top={top}
									left={left}
									isOpen={isOpen}
									isOccupied={isOccupied}
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
