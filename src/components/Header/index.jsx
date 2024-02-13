"use client"
import Image from 'next/image';
import Link from 'next/link'

export default function Index() {

    return(
        <div className='flex w-50 h-50'> 
        <Link href="/" >
        <Image
        src={'/images/logo2.png'}
        alt="intro image"
        width={100}
        height={100}
        priority={true}
        className=" cursor-pointer ml-5 mt-5 z-50"
        />
        </Link>
       </div>
    )
}