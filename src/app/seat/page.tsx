'use client'
import getMe from '@/app/libs/getMe'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import createSeat from '../libs/createSeat'

export default function Seat() {
	const [seat, setSeat] = useState<any>({ isOpen: false, floor: '', left: '', top: '' })
	const router = useRouter()

	const inputValue = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setSeat({ ...seat, [name]: event.target.value })
	}

	const fetchUser = async () => {
		const response = await getMe()
		if (response?.role !== 'admin') {
			router.push('/')
		}
	}

	useEffect(() => {
		fetchUser()
	}, [])

	const onSave = async (e: any) => {
		const response = await createSeat({
			...seat
		})
		if (response) {
			alert(`Created with id ${response.id}`)
			console.log(response)
		} else {
			alert('Error')
		}
	}

	return (
		<>
			<div className="text-4xl font-bold text-pink-500">Create Seat</div>

			<form
				className="flex justify-between border-4 border-pink-500 rounded-lg shadow flex-col p-6 text-lg gap-2"
				onSubmit={(e) => onSave(e)}
			>
				<div className="flex items-center">
					<label className="w-auto whitespace-nowrap font-semibold block text-gray-700 pr-2" htmlFor="isOpen">
						Open now :
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
					Create
				</button>
			</form>
		</>
	)
}
