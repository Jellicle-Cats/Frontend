'use client'
import deleteSeat from '@/app/libs/deleteSeat'
import getMe from '@/app/libs/getMe'
import getSeat from '@/app/libs/getSeat'
import putSeat from '@/app/libs/putSeat'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MdOutlineDeleteOutline } from 'react-icons/md'

export default function Seat({ params }: { params: { sid: string } }) {
	const [seat, setSeat] = useState<any>()
	const router = useRouter()

	const inputValue = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setSeat({ ...seat, [name]: event.target.value })
	}

	const fetchSeats = async () => {
		const response = await getSeat(params.sid)
		setSeat(response)
	}

	const fetchUser = async () => {
		const response = await getMe()
		if (response.role !== 'admin') {
			router.push('/')
		}
		fetchSeats()
	}

	useEffect(() => {
		fetchUser()
	}, [])

	const onSave = async (e: any) => {
		e.preventDefault()
		const response = await putSeat(seat.id, {
			...seat
		})
		if (response) {
			alert('Saved')
		} else {
			alert('Error')
		}
	}

	const handleDelete = async () => {
		const confirmed = window.confirm(`Do you want to delete this seat?`)
		if (confirmed) {
			const response = await deleteSeat(seat.id)
			if (response) {
				alert('Deleted')
				router.push('/map')
			} else {
				alert('Error')
			}
		}
	}

	if (!seat) {
		return <>Loading...</>
	}

	return (
		<>
			<div className="text-4xl font-bold text-pink-500">Seat</div>

			<form
				className="flex justify-between border-4 border-pink-500 rounded-lg shadow flex-col p-6 text-lg gap-2"
				onSubmit={(e) => onSave(e)}
			>
				<div className="flex items-center">
					<label className="w-auto whitespace-nowrap font-semibold block text-gray-700 pr-2" htmlFor="id">
						ID :
					</label>
					<span>{seat?.id}</span>
				</div>
				<div className="flex items-center">
					<label className="w-auto whitespace-nowrap font-semibold block text-gray-700 pr-2" htmlFor="isOpen">
						isOpen :
					</label>
					<input
						type="checkbox"
						checked={seat?.isOpen ?? false}
						className="w-5 h-5"
						id="isOpen"
						name="isOpen"
						onChange={(event) => setSeat({ ...seat, isOpen: event.target.checked })}
					/>
				</div>
				<div className="flex items-center">
					<label className="w-auto whitespace-nowrap font-semibold block text-gray-700 pr-2" htmlFor="floor">
						Floor :
					</label>
					<input
						type="text"
						required
						id="floor"
						name="floor"
						placeholder="1"
						defaultValue={seat?.floor}
						onChange={inputValue('floor')}
						className="bg-white border-2 border-grey-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
					/>
				</div>
				<div className="flex items-center">
					<label className="w-auto whitespace-nowrap font-semibold block text-gray-700 pr-2" htmlFor="top">
						Top :
					</label>
					<input
						type="number"
						required
						id="top"
						name="top"
						min={0}
						max={1000}
						placeholder="500"
						defaultValue={seat?.top}
						onChange={inputValue('top')}
						className="bg-white border-2 border-grey-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
					/>
				</div>
				<div className="flex items-center">
					<label className="w-auto whitespace-nowrap font-semibold block text-gray-700 pr-2" htmlFor="left">
						Left :
					</label>
					<input
						type="number"
						required
						id="left"
						name="left"
						min={0}
						max={1000}
						placeholder="700"
						defaultValue={seat?.left}
						onChange={inputValue('left')}
						className="bg-white border-2 border-grey-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
					/>
				</div>
				<button
					type="submit"
					className={
						'h-10 px-2 py-1 mt-4 rounded-lg font-bold text-white flex flex-row items-center text-center justify-center border-white border-2 bg-pink-500 hover:bg-pink-400'
					}
				>
					Save
				</button>
			</form>
			<button
				className={
					'h-10 pl-2 pr-1 py-1 mt-4 ml-auto rounded-lg font-bold text-pink-500 flex flex-row items-center text-center justify-center border-pink-500 border-2 hover:bg-pink-100'
				}
				onClick={handleDelete}
			>
				Delete seat
				<MdOutlineDeleteOutline className="text-xl" />
			</button>
		</>
	)
}
