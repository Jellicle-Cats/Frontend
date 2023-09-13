export default function Seat({ top, left }: { top: number; left: number }) {
	return (
		<div
			className={`w-3 h-3 rounded bg-emerald-500 hover:bg-emerald-400 hover:border-2 border-emerald-700 absolute opacity-90`}
			style={{ top: `${top}px`, left: `${left}px` }}
		></div>
	)
}
