// TimeRangeSelector.tsx
import React from 'react';

interface TimeRangeSelectorProps {
	startTime: string;
	duration: number;
	setStartTime: React.Dispatch<React.SetStateAction<string>>;
	setDuration: React.Dispatch<React.SetStateAction<number>>;
}

export default function TimeRangeSelector({
	startTime,
	duration,
	setStartTime,
	setDuration,
}: TimeRangeSelectorProps) {
	return (
		<div>
			<label htmlFor="startTime">Start Time:</label>
			<input
				type="time"
				id="startTime"
				value={startTime}
				min={new Date().toLocaleTimeString().slice(0, 5)} // Set the minimum value to now
				max={new Date(Date.now() + 24 * 60 * 60 * 1000)
					.toLocaleTimeString()
					.slice(0, 5)} // Set the maximum value to now + 24 hours
				onChange={(e) => setStartTime(e.target.value)}
			/>
			<label htmlFor="duration">Duration (in hours):</label>
			<input
				type="number"
				id="duration"
				value={duration}
				min={0} // Set the minimum duration to 0 hours
				max={5} // Set the maximum duration to 5 hours
				onChange={(e) => setDuration(Number(e.target.value))}
			/>
		</div>
	);
}
