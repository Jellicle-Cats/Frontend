'use client'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import Link from 'next/link'
import Image from 'next/image'
import { getGoogleUrl } from '@/utils/getGoogleUrl'
import { usePathname } from 'next/navigation'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navbar() {
	const from = usePathname()
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [user, setUser] = useState<any>()
	const router = useRouter()
	const fetchUser = async () => {
		setIsLoading(true)
		try {
			const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/users/me`, {
				withCredentials: true
			})
			setUser(response.data.data.user)
		} catch (error) {
			console.log(error)
			alert(error)
		}
		setIsLoading(false)
	}

	const handleLogout = async () => {
		setIsLoading(true)
		try {
			await axios.get(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/auth/logout`, {
				withCredentials: true
			})
			setUser(null)
			router.push('/')
		} catch (error) {
			console.log(error)
			// alert(error)
		}
		setIsLoading(false)
	}

	useEffect(() => {
		fetchUser()
	}, [])

	return (
		<div className="h-[50px] bg-pink-500 border-t border-t-gray-400 flex items-center justify-between shadow-md text-white py-4 px-8">
			<div>
				<Link href="/">Welcome to Chulalongkorn University Central Library Booking</Link>
			</div>
			<div>
				{isLoading ? (
					<svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
						<AiOutlineLoading3Quarters className="text-2xl" />
					</svg>
				) : user ? (
					<div className="flex items-center gap-2">
						<Link
							href="/account"
							className="h-10 px-2 py-1 flex gap-2 items-center cursor-pointer hover:bg-pink-300 rounded-lg"
						>
							<div className="whitespace-nowrap">{user.name}</div>
							<Image
								src={user.photo || ''}
								alt={user.name + ' photo'}
								width={30}
								height={30}
								className="rounded-full"
							/>
						</Link>
						<button
							onClick={() => handleLogout()}
							className={
								'h-10 px-2 py-1 rounded-lg font-bold text-white flex flex-row items-center text-center justify-center border-white border-2 bg-pink-500 hover:bg-pink-400'
							}
						>
							Logout
							<BiLogOut className="text-xl" />
						</button>
					</div>
				) : (
					<a
						href={getGoogleUrl(from)}
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
		</div>
	)
}
