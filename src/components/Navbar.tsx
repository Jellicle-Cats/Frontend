import Link from 'next/link'

export default function Navbar() {
	return (
		<div className="h-[50px] bg-pink-500 border-t border-t-gray-400 flex items-center shadow-md text-white">
			<div className="p-4">
				<Link href="/">Welcome to Chulalongkorn University Central Library Booking</Link>
			</div>
		</div>
	)
}
