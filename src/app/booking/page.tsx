'use client';
import SeatMap from '@/components/SeatMap';
import TimeRangeSelector from '@/components/TimeRangeSelector';
import Link from 'next/link';
import { useState } from 'react';

export default function Booking() {
	const now = new Date();
	now.setMinutes(Math.ceil(now.getMinutes() / 60) * 60); // Round the minutes up to the next hour

	const [startTime, setStartTime] = useState(now.toTimeString().slice(0, 5));
	const [duration, setDuration] = useState(1); // Default duration is 1 hour

	return (
		<>
			<div className="text-4xl font-bold text-pink-500">Booking</div>
			<div>Please select seat</div>
			<TimeRangeSelector
				startTime={startTime}
				duration={duration}
				setStartTime={setStartTime}
				setDuration={setDuration}
			/>
			<div className="w-fit bg-pink-500 text-white rounded py-2 px-4 ml-auto hover-bg-pink-400 text-2xl font-semibold">
				<Link href="/confirm" className="">
					Next
				</Link>
			</div>
			<SeatMap mode="book" startTime={startTime} duration={duration} />
		</>
	);
}
