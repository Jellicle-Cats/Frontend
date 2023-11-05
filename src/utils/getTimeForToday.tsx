export default function getTimeForToday(time: string): Date {
	// Validate the time format with a simple regex
	const timePattern = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/

	if (!timePattern.test(time)) {
		throw new Error('Invalid time format. It should be HH:mm')
	}

	const [hours, minutes] = time.split(':').map(Number)

	const date = new Date()
	date.setHours(hours, minutes, 0, 0) // Set hours, minutes, and reset seconds and milliseconds

	return date
}
