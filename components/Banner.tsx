function Banner() {
    return (
        <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold py-16 px-10'>
            <div>
                <span className='text-sm  font-mono uppercase font-light'>Welcome To My World</span>
                <h1 className='text-6xl text-[#1bb1e7]'>Koen Schipper Dev Blog</h1>
                <h2 className='text-2xl '>
                    Welcome to{" "}
                    <span className='underline decoration-5 decoration-[#0072bc]'>Every</span>{" "}
                    <span className='underline decoration-5 decoration-[#0072bc]'>JavaScript</span>{" "}
                    <span className='underline decoration-5 decoration-[#0072bc]'>Developers</span>{" "}
                    Favorite Blog!
                </h2>
            </div>

            <p className='mt-5 md:mt-2 text-gray-300 max-w-sm py-4 text-right'>
                New Features | The latest Technologies | The Weekly Debugging Nightmares & Much
                More!
            </p>
        </div>
    )
}

export default Banner
