import { useRouter } from 'next/navigation'
import { BsCheckLg } from 'react-icons/Bs'

export default function Seat({
	id,
	top,
	left,
	isOpen,
	isOccupied,
	mode,
	selectedSeat,
	setSelectdSeat
}: {
	id: number
	top: number
	left: number
	isOpen: boolean
	isOccupied: boolean
	mode?: string
	selectedSeat?: number
	setSelectdSeat?: Function
}) {
	const router = useRouter()

	const handleClick = () => {
		if (mode == 'setting') {
			router.push(`/seat/${id}`)
		}
		if (!isOccupied && setSelectdSeat) {
			setSelectdSeat(id)
		}
	}

	const getClassName = () => {
		let className = 'w-3 h-3 rounded absolute opacity-90 '
		if (!isOpen || isOccupied) {
			className += 'bg-gray-500 '
			if (mode === 'setting') {
				className += 'hover:bg-gray-400 hover:outline outline-gray-700 '
			}
		} else if (selectedSeat === id) {
			className += 'bg-pink-500 outline outline-pink-700'
		} else {
			className += 'bg-emerald-500 '
			if (mode === 'setting' || mode === 'book') {
				className += 'hover:bg-emerald-400 hover:outline outline-emerald-700 '
			}
		}
		return className
	}

	return (
		<div className={getClassName()} style={{ top: `${top}px`, left: `${left}px` }} onClick={handleClick}>
			{selectedSeat === id && <BsCheckLg className="text-white text-xs" />}
		</div>
	)
}
