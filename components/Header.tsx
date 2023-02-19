import Image from "next/image"
import Link from "next/link"
import logo from "../public/logo/logo.png"

function Header() {
    return (
        <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
            <div className='flex items-center space-x-2'>
                <Link href='/'>
                    <Image src={logo} height={60} alt='logo' />
                </Link>
            </div>
            <div>
                <a
                    href='https://koenschipper.com/#contact'
                    className='px-5 py-5 text-sm md:text-base bg-gray-200 text-[#0072bc] border-[#1bb1e7] hover:bg-[#0072bc] hover:text-gray-200 hover:border-[#0072bc] border-2 flex items-center rounded-full text-center'
                    target='_blank'
                    rel='noreferrer'
                >
                    Let&apos;s Bring Your Idea To Life!
                </a>
            </div>
        </header>
    )
}

export default Header
