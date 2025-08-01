"use client"
import React from 'react'

function Card({pic,title,address,id,description,genre,price}) {
    const words = title.split(" ");
    const firstLine = words.slice(0, 3).join(" ");
    const secondLine = words.slice(3).join(" ");
  return (
    <div className='bg-white rounded-lg opacity-90 hover:scale-105 hover:opacity-110 hover:shadow-2xl'>
    
        <img src={pic} className='w-full h-32 rounded-t-lg'></img>
        <div className='flex flex-col ml-2 m-2 gap-2'>
        <h1 className='font-bold text-lg break-words whitespace-normal'>
            {/* {title} */}
            {firstLine}
            {secondLine && <><br />{secondLine}</>}
        </h1>
        <h5 className='font-bold text-sm'>
            Price: Rs. {price}
        </h5>
        <h4 className='text-sm'>
            Genre: {genre}
        </h4>
        <h2 className='text-gray-600 text-sm'>
            {description}
        </h2>
        <h3 className='text-gray-600 text-sm'>
            {address}
        </h3>
        </div>
</div>
  )
}
export default Card 