import Link from "next/link"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

function StudioNavbar(props: any) {
    return (
        <div>
            <div className='flex items-center justify-between p-5'>
                <Link href='/' className='text-[#1bb1e7] flex items-center'>
                    <ArrowUturnLeftIcon className='h-6 w-6 text-[#1bb1e7] mr-2' />
                    Go To Website
                </Link>

                <div className='hidden md:flex p-5 rounded-lg justify-center border-2 border-[#1bb1e7]'>
                    <h1 className='font-bold text-[#db4437]'>Discipline Equals Freedom</h1>
                </div>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    )
}

export default StudioNavbar
