'use client';
import React, { useState } from 'react';

interface TimeRangeSelectorProps {
	startTime: string;
	endTime: string;
	onChange: (startTime: string, endTime: string) => void;
	setStartTime: React.Dispatch<React.SetStateAction<string>>;
	setEndTime: React.Dispatch<React.SetStateAction<string>>;
}

export default function TimeRangeSelector({
	startTime,
	endTime,
	onChange,
	setStartTime,
	setEndTime,
}: TimeRangeSelectorProps) {
	const handleTimeChange = () => {
		// Parse start and end times as Date objects for comparison
		const startDate = new Date(`2000-01-01T${startTime}`);
		let endDate = new Date(`2000-01-01T${endTime}`);

		// Calculate the minimum end time
		const minimumEndTime = new Date(startDate);
		minimumEndTime.setHours(minimumEndTime.getHours() + 1);

		// Check if end time is less than the minimum end time
		if (endDate < minimumEndTime) {
			endDate = new Date(minimumEndTime);
			setEndTime(endDate.toTimeString().slice(0, 5));

			alert(
				'End time must be at least 1 hour after the start time. End time has been adjusted.'
			);
		}

		onChange(startTime, endTime);
	};

	return (
		<div>
			<label htmlFor="startTime">Start Time:</label>
			<input
				type="time"
				id="startTime"
				value={startTime}
				onChange={(e) => setStartTime(e.target.value)}
			/>
			<label htmlFor="endTime">End Time:</label>
			<input
				type="time"
				id="endTime"
				value={endTime}
				onChange={(e) => setEndTime(e.target.value)}
			/>
			<button onClick={handleTimeChange}>Apply</button>
		</div>
	);
}
