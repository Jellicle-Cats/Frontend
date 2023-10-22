export default function FloorButton({
	floor,
	selectedFloor,
	setSelectedFloor
}: {
	floor: string
	selectedFloor: string
	setSelectedFloor: Function
}) {
	if (floor === selectedFloor) {
		return (
			<button className="w-10 h-10 bg-white rounded-lg text-pink-500 border-2 border-pink-500 font-bold">
				{floor}
			</button>
		)
	}
	return <button className="w-10 h-10 bg-pink-500 rounded-lg text-white font-semibold" onClick={() => setSelectedFloor(floor)}>{floor}</button>
}
