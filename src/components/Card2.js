"use client"
import React from 'react';
import { ImInfo } from "react-icons/im";

function Card({ pic, title, id, description, genre, isActive, onClick }) {
  return (
    
    <div
      className={`relative bg-white rounded-lg opacity-90 cursor-pointer mb-5 transition-all duration-300 ease-in-out 
        ${isActive ? 'scale-110 opacity-100 shadow-2xl z-20' : 'hover:shadow-2xl'}`}
      onClick={onClick}
      >
      <img src={pic} className='lg:w-full lg:h-40 w-full h-48 rounded-t-lg' />
      <div className='flex flex-col ml-4 mt-2 gap-2 mb-4'>
        <h1 className='font-bold text-lg'>{title}</h1>
        <h4 className='font-bold text-sm'>Genre: {genre}</h4>
        <h2 className='text-gray-600 text-sm pr-4'>
          {description}
          <ImInfo className='inline-block text-gray-600 text-sm ml-2' size={20} />
        </h2>
      </div>

    </div>
  );
}

export default Card;
