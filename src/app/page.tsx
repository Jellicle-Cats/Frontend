import Link from 'next/link'
import { PiMagnifyingGlassBold } from 'react-icons/pi'
import { TbArmchair } from 'react-icons/tb'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { LuLogIn, LuLogOut } from 'react-icons/lu'

export default function Home() {
	const menuClasses =
		'p-4 rounded-xl font-semibold text-white flex flex-col items-center text-center justify-center gap-2 w-full '
	const iconClasses = 'text-5xl md:text-6xl lg:text-7xl lg:pt-1'

	return (
		<main className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-2 gap-4 sm:gap-8 h-full text-xl sm:text-4xl md:text-5xl">
			<Link href="/booking" className={menuClasses + 'bg-emerald-500 hover:bg-emerald-400 row-span-2'}>
				Book Seat
				<TbArmchair className={iconClasses} />
			</Link>
			<Link href="/map" className={menuClasses + 'bg-sky-500 hover:bg-sky-400'}>
				View Seat
				<PiMagnifyingGlassBold className={iconClasses} />
			</Link>
			<Link href="/account" className={menuClasses + 'bg-gray-700 hover:bg-gray-600'}>
				Account
				<MdOutlineAccountCircle className={iconClasses} />
			</Link>
			<Link href="/checkin" className={menuClasses + 'bg-gray-700 hover:bg-gray-600'}>
				Check In
				<LuLogIn className={iconClasses} />
			</Link>
			<Link href="/checkout" className={menuClasses + 'bg-gray-700 hover:bg-gray-600'}>
				Check Out
				<LuLogOut className={iconClasses} />
			</Link>
		</main>
	)
}
