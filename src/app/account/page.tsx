'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { getGoogleUrl } from '@/utils/getGoogleUrl'
import getMe from '../libs/getMe'
import getUserHistory from '../libs/getUserHistory'
import { LuLogIn, LuLogOut } from 'react-icons/lu'
import checkIn from '../libs/checkIn'
import checkOut from '../libs/checkOut'

export default function Account() {
	const [user, setUser] = useState<any>()
	const [bookingList, setBookingList] = useState<any>()

	const bookingStatusMapping: Record<any, string> = {
		0: 'UNKNOWN',
		1: 'BOOKED',
		2: 'CHECKED_IN',
		3: 'COMPLETED',
		4: 'MISSED'
	}
	const millisecondToDate = (timestamp: number): string => {
		const date = new Date(timestamp)
		const formattedDate = date.toLocaleString('en-GB', {
			timeZone: 'Asia/Bangkok', // Set the desired time zone, e.g., UTC+7 (Asia/Bangkok)
			hour12: false // Display time in 24-hour format
		})
		return formattedDate
	}

	const fetchUser = async () => {
		const getUser = await getMe()
		setUser(getUser)
		if (getUser) {
			setBookingList(await getUserHistory(getUser.userId))
		}
	}

	useEffect(() => {
		fetchUser()
	}, [])

	return (
		<>
			<div className="space-y-5">
				<div className="text-4xl font-bold text-pink-500">Account</div>
				<div className="flex justify-between border-4 border-pink-500 rounded-lg p-6 shadow text-lg">
					{user ? (
						<>
							<div className="flex gap-4 flex-col">
								<p>ID: {user?.id}</p>
								<p>Name: {user?.name}</p>
								<p>Email: {user?.email}</p>
								<p>Role: {user?.role}</p>
								<p>Provider: {user?.provider}</p>
							</div>

							<Image
								priority
								src={user?.photo || ''}
								alt={user?.name + ' photo'}
								width={205}
								height={200}
								className="rounded-full shadow"
							/>
						</>
					) : (
						<a
							href={getGoogleUrl('/account')}
							className="h-10 px-2 py-1 rounded-lg font-bold text-white flex flex-row items-center text-center justify-center border-white border-2 bg-pink-500 hover:bg-pink-400"
						>
							<Image
								src={'/img/google.png'}
								alt="google"
								width={30}
								height={30}
								className="bg-white rounded-full p-1 mr-2"
							/>
							Login with Google
						</a>
					)}
				</div>
				<div className="text-3xl font-bold text-pink-500">Booking History</div>
				<div className="relative overflow-x-auto">
					<table className="w-full text-lg text-left  text-pink-500">
						<thead className="text-lg text-white uppercase bg-pink-500">
							<tr>
								<th scope="col" className="px-6 py-3">
									Starting Time
								</th>
								<th scope="col" className="px-6 py-3">
									Ending Time
								</th>
								<th scope="col" className="px-6 py-3">
									Seat ID
								</th>
								<th scope="col" className="px-6 py-3">
									Status
								</th>
								<th scope="col" className="px-6 py-3">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{bookingList ? (
								bookingList
									.sort(
										(a: any, b: any) =>
											b.bookingData.bookingTime.startTime - a.bookingData.bookingTime.startTime
									)
									.map((bookingItem: any, index: number) => (
										<tr key={index} className="bg-gray-100 border-b-2 border-gray-300">
											<td className="px-6 py-4 font-normal">
												{millisecondToDate(bookingItem.bookingData.bookingTime.startTime)}
											</td>
											<td className="px-6 py-4">
												{millisecondToDate(bookingItem.bookingData.bookingTime.endTime)}
											</td>
											<td className="px-6 py-4">{bookingItem.bookingData.seat.seatId}</td>
											<td className="px-6 py-4">
												{bookingStatusMapping[bookingItem.bookingData.status]}
											</td>
											<td className="px-6 py-2">
												{bookingStatusMapping[bookingItem.bookingData.status] === 'BOOKED' && (
													<button
														className="w-[145px] justify-center flex items-center gap-1 bg-white rounded-lg text-pink-500 border-2 border-pink-500 font-bold px-2 py-1 hover:bg-pink-100"
														onClick={() => {
															checkIn(user.userId, bookingItem.id.id)
															fetchUser()
														}}
													>
														Check In
														<LuLogIn />
													</button>
												)}
												{bookingStatusMapping[bookingItem.bookingData.status] ===
													'CHECKED_IN' && (
													<button
														className="w-[145px] justify-center flex items-center gap-1 bg-white rounded-lg text-pink-500 border-2 border-pink-500 font-bold px-2 py-1 hover:bg-pink-100"
														onClick={() => {
															checkOut(user.userId, bookingItem.id.id)
															fetchUser()
														}}
													>
														Check Out
														<LuLogOut />
													</button>
												)}
											</td>
										</tr>
									))
							) : (
								<tr>
									<td colSpan={4}>No booking data available.</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}
