'use client';
import SeatMap from '@/components/SeatMap';
import TimeRangeSelector from '@/components/TimeRangeSelector';
import Link from 'next/link';
import { SetStateAction, useState } from 'react';

export default function Booking() {
	const now = new Date();
	now.setMinutes(Math.ceil(now.getMinutes() / 60) * 60); // Round the minutes up to the next hour

	const [startTime, setStartTime] = useState(now.toTimeString().slice(0, 5));
	const [endTime, setEndTime] = useState(
		new Date(now.getTime() + 60 * 60 * 1000).toTimeString().slice(0, 5)
	);

	const handleTimeChange = (
		startTime: SetStateAction<string>,
		endTime: SetStateAction<string>
	) => {
		console.log(startTime, endTime);
	};

	return (
		<>
			<div className="text-4xl font-bold text-pink-500">Booking</div>
			<div>Please select seat</div>
			<TimeRangeSelector
				startTime={startTime}
				endTime={endTime}
				onChange={handleTimeChange}
				setStartTime={setStartTime}
				setEndTime={setEndTime}
			/>
			<div className="w-fit bg-pink-500 text-white rounded py-2 px-4 ml-auto hover:bg-pink-400 text-2xl font-semibold">
				<Link href="/confirm" className="">
					Next
				</Link>
			</div>
			<SeatMap mode="book" startTime={startTime} endTime={endTime} />
		</>
	);
}
