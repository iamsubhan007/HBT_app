"use client"
import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from 'next/link'

function chatsupport() {
  return (
    <div className='bg-gray-300 flex flex-col items-center justify-center min-h-screen'>
        <Link href={"/"} className='text-2xl text-gray-700 hover:text-gray-900 cursor-pointer absolute top-4 left-4'>
          <h1 className='inline-block'>
            <IoMdArrowRoundBack />Back
          </h1>
        </Link>
        <iframe src="https://app.dante-ai.com/embed/?kb_id=485c1a70-81ae-46e8-8061-114e9486060c&token=9e1df131-9388-4c68-9c62-21718443c521&modeltype=gpt-4-omnimodel-mini&tabs=false"
                allow="clipboard-write; clipboard-read; *;microphone *"
                width="90%"
                height="550" 
                // frameBorder="0"
                >
        </iframe>
    </div>
  )
}

export default chatsupport