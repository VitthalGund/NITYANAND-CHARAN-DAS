import React from 'react'
import Image from 'next/image'

const LandingPhoto = ({ name, title }: { name: string, title: string }) => {
    return (
        <>
            <div className="relative w-full h-[20rem] mx-auto overflow-y-hidden object-cover">
                <Image src={"/Nityanand Charan Das.avif"}
                    width={30} height={10} alt='titleImage' content='.png'
                    className='w-full h-[20rem] bg-black'
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-900/40"></div>
                <div className="absolute inset-0 flex flex-col justify-end items-start m-10 flex-wrap">
                    <h2 className="text-white sm:text-lg lg:text-1xl font-bold">{name}</h2>
                    <h2 className="text-white font-bold text-2xl sm:text-2xl md:w-[32rem] lg:text-4xl sm:w-80 ">{title}</h2>
                </div>
            </div>
        </>
    )
}

export default LandingPhoto
