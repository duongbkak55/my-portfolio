import Image from 'next/image'
import React from 'react'

function Project({item}) {
    return (
        <div className='pl-[6vw]'>
            <h1 className='text-yellow-300 text-xl font-bold'>{item.title}</h1>
            <div className='w-[50vw] min-h-[50vh]'>
                <img className="float-right max-w-[400px] max-h-[400px] object-contain" src={item.image} />
                <p className='clear-none text-xl '>{item.content}</p>
            </div>
        </div>
    )
}

export default Project