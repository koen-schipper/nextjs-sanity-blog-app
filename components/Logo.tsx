import Image from "next/image"

function Logo(props: any) {
    const { renderDefault, title } = props

    return (
        <div className='p-3 flex items-center space-x-2'>
            <Image
                height={50}
                width={50}
                src='https://koenschipper.com/assets/images/koen/logo.png'
                alt='Logo'
            />
            <>{renderDefault(props)}</>
        </div>
    )
}

export default Logo
