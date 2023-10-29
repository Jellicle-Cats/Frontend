'use client'
import SeatMap from '@/components/SeatMap'
import getMe from '../libs/getMe'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Map() {
	const [isAdmin, setIsAdmin] = useState(false)

	const fetchUser = async () => {
		const response = await getMe()
		if (response?.role == 'admin') {
			setIsAdmin(true)
		}
	}

	useEffect(() => {
		fetchUser()
	}, [])

	return (
		<>
			<div className="flex justify-between items-center">
				<div className="text-4xl font-bold text-pink-500">Seat Map</div>
				{isAdmin && (
					<Link
						href={'/seat'}
						className={
							'h-10 px-2 py-1 mt-4 ml-auto rounded-lg font-bold text-pink-500 flex flex-row items-center text-center justify-center border-pink-500 border-2 hover:bg-pink-100'
						}
					>
						Create seat
					</Link>
				)}
			</div>
			<SeatMap mode={isAdmin ? 'setting' : ''} />
		</>
	)
}
