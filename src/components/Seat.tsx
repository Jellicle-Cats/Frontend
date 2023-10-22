export default function Seat({ top, left, isOpen }: { top: number; left: number; isOpen: boolean }) {
	if (!isOpen) {
		return (
			<div
				className={`w-3 h-3 rounded bg-gray-500 absolute opacity-90`}
				style={{ top: `${top}px`, left: `${left}px` }}
			></div>
		)
	}
	return (
		<div
			className={`w-3 h-3 rounded bg-emerald-500 hover:bg-emerald-400 hover:border-2 border-emerald-700 absolute opacity-90`}
			style={{ top: `${top}px`, left: `${left}px` }}
		></div>
	)
}
