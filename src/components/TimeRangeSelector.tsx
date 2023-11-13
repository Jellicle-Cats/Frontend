// TimeRangeSelector.tsx
import React from 'react'

interface TimeRangeSelectorProps {
	startTime: string
	duration: number
	setStartTime: React.Dispatch<React.SetStateAction<string>>
	setDuration: React.Dispatch<React.SetStateAction<number>>
	selectedSeat: number
	handleCreateBooking: Function
}

export default function TimeRangeSelector({
	startTime,
	duration,
	setStartTime,
	setDuration,
	selectedSeat,
	handleCreateBooking
}: TimeRangeSelectorProps) {
	return (
		<form className="my-4" onSubmit={() => handleCreateBooking()}>
			<p className="inline-block">Date:</p>
			<p className="inline-block font-semibold text-lg text-pink-500 mx-2">
				{new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}
			</p>
			<label htmlFor="startTime">Start Time:</label>
			<input
				className="border-2 border-pink-500 mx-2 rounded p-1 bg-pink-50"
				type="time"
				id="startTime"
				value={startTime}
				min={new Date().toLocaleTimeString().slice(0, 5)} // Set the minimum value to now
				// max={new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleTimeString().slice(0, 5)} // Set the maximum value to now + 24 hours
				onChange={(e) => setStartTime(e.target.value)}
				onKeyDown={(event) => {
					if (event.key === 'Backspace') {
						event.preventDefault()
					}
				}}
			/>
			<label htmlFor="duration">Duration (in hours):</label>
			<input
				className="border-2 border-pink-500 mx-2 rounded p-1 bg-pink-50"
				type="number"
				id="duration"
				value={duration}
				min={0} // Set the minimum duration to 0 hours
				max={5} // Set the maximum duration to 5 hours
				onChange={(e) => setDuration(Number(e.target.value))}
			/>
			{!!selectedSeat && (
				<button
					type="submit"
					className="w-full bg-pink-500 text-white rounded py-2 px-4 mt-2 mb-4 ml-auto hover-bg-pink-400 text-2xl font-semibold hover:bg-pink-400"
				>
					Book
				</button>
			)}
		</form>
	)
}
