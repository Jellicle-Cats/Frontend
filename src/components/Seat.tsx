import { useRouter } from 'next/navigation'

export default function Seat({
	id,
	top,
	left,
	isOpen,
	mode
}: {
	id: number
	top: number
	left: number
	isOpen: boolean
	mode?: string
}) {
	const router = useRouter()

	const handleClick = () => {
		if (mode == 'setting') {
			router.push(`/seat/${id}`)
		}
	}
	if (!isOpen) {
		return (
			<div
				className={`w-3 h-3 rounded bg-gray-500 absolute opacity-90 ${
					mode === 'setting' && 'hover:bg-gray-400 hover:border-2 border-gray-700'
				}`}
				style={{ top: `${top}px`, left: `${left}px` }}
				onClick={handleClick}
			></div>
		)
	}
	return (
		<div
			className={`w-3 h-3 rounded bg-emerald-500 absolute opacity-90 ${
				(mode === 'setting' || mode === 'book') && 'hover:bg-emerald-400 hover:border-2 border-emerald-700'
			}`}
			style={{ top: `${top}px`, left: `${left}px` }}
			onClick={handleClick}
		></div>
	)
}
