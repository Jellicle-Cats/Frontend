'use client'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

export default function Navbar() {
	const { data, status } = useSession()
	return (
		<div className="h-[50px] bg-pink-500 border-t border-t-gray-400 flex items-center justify-between shadow-md text-white p-4">
			<div>
				<Link href="/">Welcome to Chulalongkorn University Central Library Booking</Link>
			</div>
			<div>
				{status === 'loading' ? (
					<svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
						<AiOutlineLoading3Quarters className="text-2xl" />
					</svg>
				) : status === 'authenticated' ? (
					<div className="flex items-center gap-2">
						<Link
							href="/account"
							className="h-10 px-2 py-1 flex gap-2 items-center cursor-pointer hover:bg-pink-300 rounded-lg"
						>
							<div className="whitespace-nowrap">{data?.user?.name}</div>
							<Image
								src={data?.user?.image || ''}
								alt={data?.user?.name + ' photo'}
								width={30}
								height={30}
								className="rounded-full"
							/>
						</Link>
						<button
							onClick={() => signOut()}
							className={
								'h-10 px-2 py-1 rounded-lg font-bold text-white flex flex-row items-center text-center justify-center border-white border-2 bg-pink-500 hover:bg-pink-400'
							}
						>
							Logout
							<BiLogOut className="text-xl" />
						</button>
					</div>
				) : (
					<button
						onClick={() => signIn('google')}
						className={
							'px-2 py-1 rounded-lg font-bold text-white flex flex-row items-center text-center justify-center w-full border-white border-2 hover:bg-pink-400'
						}
					>
						Login
						<BiLogIn className="text-xl" />
					</button>
				)}
			</div>
		</div>
	)
}
