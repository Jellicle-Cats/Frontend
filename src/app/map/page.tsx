'use client'
import SeatMap from '@/components/SeatMap'
import getMe from '../libs/getMe'
import { useEffect, useState } from 'react'

export default function Map() {
	const [isAdmin, setIsAdmin] = useState(false)

	const fetchUser = async () => {
		const response = await getMe()
		if (response.role == 'admin') {
			setIsAdmin(true)
		}
	}

	useEffect(() => {
		fetchUser()
	}, [])

	return (
		<>
			<div className="text-4xl font-bold text-pink-500">Seat Map</div>
			<SeatMap mode={isAdmin ? 'setting' : ''} />
		</>
	)
}
