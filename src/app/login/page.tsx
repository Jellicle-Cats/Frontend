import Link from 'next/link'

export default function Login() {
	return (
		<div className="max-w-2xl mx-auto pt-4">
			<div className="text-4xl font-semibold text-center">Login</div>
			<form className="text-xl flex flex-col gap-2">
				<div className="flex flex-col">
					<label>E-mail</label>
					<input type="email" className="border border-black rounded px-2 py-1" />
				</div>
				<div className="flex flex-col">
					<label>Password</label>
					<input type="password" className="border border-black rounded px-2 py-1" />
				</div>
				<button className="bg-pink-500 text-white rounded p-1 mt-2">Login</button>
			</form>
			<div className="ml-auto w-fit pt-1">
				<Link href="/register" className="text-pink-500 hover:underline">
					Don't have an account? Register here
				</Link>
			</div>
		</div>
	)
}
