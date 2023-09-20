'use client'
import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function Register() {
	return (
		<div className="max-w-2xl mx-auto pt-4">
			<div className="text-4xl font-semibold text-center">Register</div>
			<form className="text-xl flex flex-col gap-2">
				<div className="flex flex-col">
					<label>First name</label>
					<input type="text" className="border border-black rounded px-2 py-1" />
				</div>
				<div className="flex flex-col">
					<label>Last name</label>
					<input type="text" className="border border-black rounded px-2 py-1" />
				</div>
				<div className="flex flex-col">
					<label>E-mail</label>
					<input type="email" className="border border-black rounded px-2 py-1" />
				</div>
				<div className="flex flex-col">
					<label>Password</label>
					<input type="password" className="border border-black rounded px-2 py-1" />
				</div>
				<button className="bg-pink-500 text-white rounded p-1 mt-2">Register</button>
			</form>
			<div className="ml-auto w-fit pt-1">
				<Link href="/login" className="text-pink-500 hover:underline">
					Already have an account? Login here
				</Link>
			</div>
		</div>
	)
}
