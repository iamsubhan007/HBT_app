"use client"
import React, {useState} from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from 'next/link';
import Card from '@/components/Card1'
import { details } from '@/components/ItemDetails';
import Banner from '@/components/banner';
import Footer from '@/components/footer'


function MenuPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredItems = details.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.genre.toLowerCase().includes(searchTerm.toLowerCase())
      );
  return (
    <div className='min-h-screen flex flex-col items-center'>
        <Banner/>
        <div className='relative-inline-block w-full h-70 grid grid-cols-3 bg-cover bg-center bg-no-repeat mb-5'>
            <Link href ={"/"}>
                <div className='text-white ml-5 pt-5 px-6 absolute top-2 left-0'>
                    <IoMdArrowRoundBack size={20}/> Back
                </div>
            </Link>
        </div>

        <div className="m-6 rounded-md bg-gray-200 text-gray-700 shadow-lg">
        <input
          type="text"
          placeholder="Search by title or genre..."
          className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
        
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 rounded-lg gap-5 w-fit p-5">
        {filteredItems.length > 0 ? (
          filteredItems.map((event) => (
             <Card key = {event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}/>
            ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No results found.</p>
        )}
      </div>
      <Footer/>
    </div>
  )
}

export default MenuPage