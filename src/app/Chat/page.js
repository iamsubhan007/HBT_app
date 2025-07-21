"use client"
import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from 'next/link'

function chatsupport() {
  return (
    <div className='bg-gray-300 flex flex-col items-center justify-center min-h-screen'>
        <div className='relative-inline-block w-full bg-cover bg-center bg-no-repeat mb-2'>
            <Link href ={"/"}>
                <h1 className=' bg-slate-900 rounded-lg flex text-white p-2 m-2 md:top-96 md:left-0'>
                    <span><IoMdArrowRoundBack size={20}/></span>
                    <span>back</span>
                </h1>
            </Link>
        </div>
        <iframe src="https://app.dante-ai.com/embed/?kb_id=485c1a70-81ae-46e8-8061-114e9486060c&token=9e1df131-9388-4c68-9c62-21718443c521&modeltype=gpt-4-omnimodel-mini&tabs=false"
                allow="clipboard-write; clipboard-read; *;microphone *"
                width="90%"
                height="500" 
                // frameBorder="0"
                >
        </iframe>
    </div>
  )
}

export default chatsupport