'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { getGoogleUrl } from '@/utils/getGoogleUrl'
import getMe from '../libs/getMe'

export default function Account() {
	const [user, setUser] = useState<any>()

	const fetchUser = async () => {
		setUser(await getMe())
	}

	useEffect(() => {
		fetchUser()
	}, [])

	return (
		<>
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
		</>
	)
}
