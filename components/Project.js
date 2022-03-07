import Image from 'next/image'
import React from 'react'

function Project({ item }) {
    return (
        <a href={item.url} target="_blank" rel="noreferrer">
            <div className='ml-[6vw] w-[55vw] mt-10'>
                <h1 className='text-yellow-300 sm:text-base md:text-xl text-2xl font-extralight tracking-widest leading-10'>{item.title}</h1>
                <div className='group min-w-[50vw] h-fit'>
                    <img className="float-right md:max-w-[200px] lg:max-w-[400px] md:max-h-[200px] lg:max-h-[400px] object-contain group-hover:scale-150 
                    group-hover:delay-200 group-hover:z-100 group-hover:ease-in-out group-hover:translate-x-20" src={item.image} />
                    <p className='clear-none sm:text-xs md:text-base lg:text-xl font-extralight tracking-widest leading-normal font-sans'>{item.content}</p>
                </div>
            </div>
        </a>
    )
}

export default Project