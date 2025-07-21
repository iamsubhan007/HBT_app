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
    const [selectedGenre, setSelectedGenre] = useState("All");
    const filteredItems = details.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.genre.toLowerCase().includes(searchTerm.toLowerCase());
    
      const matchesGenre =
        selectedGenre === "All"
          ? true
          : item.genre.toLowerCase() === selectedGenre.toLowerCase();
    
      return matchesSearch && matchesGenre;
    });
    const regularItems = details.filter((item) => item.genre === "Regular Items");
    const specialItems = details.filter((item) => item.genre === "Special Items");
    const chickenItems = details.filter((item) => item.genre === "Chicken Naan");
    const beefItems = details.filter((item) => item.genre === "Beef Qeema Naan");
    const muttonItems = details.filter((item) => item.genre === "Mutton Naan");
    const baisanItems = details.filter((item) => item.genre === "Besaan Wala Naan");
    const rogniItems = details.filter((item) => item.genre === "Rogni Naan");
    const alooItems = details.filter((item) => item.genre === "Aloo Wala Naan");
    const tikkaItems = details.filter((item) => item.genre === "Tikka Boti");
    const kababItems = details.filter((item) => item.genre === "Kabab Roll");
    const prathaItems = details.filter((item) => item.genre === "Pratha");
    const sideItems = details.filter((item) => item.genre === "Side");


    const genres = ["All", "Regular Items", "Mutton Naan", "Beef Qeema Naan", "Chicken Naan","Rogni Naan", "Aloo Wala Naan", "Besaan Wala Naan", "Tikka Boti", "Kabab Roll", "Pratha", "Side"];
  return (
    <div className='min-h-screen flex flex-col items-center'>
        <Banner/>
        <div className='relative-inline-block w-full h-70 grid grid-cols-3 bg-cover bg-center bg-no-repeat mb-5'>
            <Link href ={"/"}>
                <div className='text-slate-950 ml-5 pt-5 px-6 absolute top-32 left-0 md:top-96 md:left-0'>
                    <IoMdArrowRoundBack size={40}/>
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
      <div className="w-full overflow-x-auto mb-4 sticky top-1 z-50 bg-gray-950 flex">
        <div className="flex space-x-3 px-4 py-2">
          {genres.map((genre) => (
            <a
              key={genre}
              href={`#${genre}`}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-200 ${
                selectedGenre === genre
                  ? "bg-red-800 text-gray-100 font-bold"
                  : "bg-gray-100 text-gray-950 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre.charAt(0).toUpperCase() + genre.slice(1)}
            </a>
          ))}
        </div>
      </div>

      <h1 id="All" className="w-[95%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10">
        Special Items 🍽️
      </h1>

      <div className="grid sm:grid-cols-1 lg:grid-cols-4 rounded-lg gap-5 w-[80%] p-5 ">
        {specialItems.length > 0 ? (
          specialItems.map((event) => (
              <Card key = {event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No items found.</p>
        )}
      </div>
      <h1 id='Mutton Naan' className="w-[95%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10">
        Mutton Items 🍽️
      </h1>

      <div className="grid sm:grid-cols-1 lg:grid-cols-4 rounded-lg gap-5 w-[80%] p-5">
        {muttonItems.length > 0 ? (
          muttonItems.map((event) => (
              <Card key = {event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No items found.</p>
        )}
      </div>
      <h1 id='Beef Qeema Naan' className="w-[95%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10">
        Beef Naan 🍽️
      </h1>

      <div className="grid sm:grid-cols-1 lg:grid-cols-4 rounded-lg gap-5 w-[80%] p-5">
        {beefItems.length > 0 ? (
          beefItems.map((event) => (
              <Card key = {event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No items found.</p>
        )}
      </div>
      <h1 id='Chicken Naan' className="w-[95%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10">
        Chicken Naan 🍽️
      </h1>

      <div className="grid sm:grid-cols-1 lg:grid-cols-4 rounded-lg gap-5 w-[80%] p-5">
        {chickenItems.length > 0 ? (
          chickenItems.map((event) => (
              <Card key = {event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No items found.</p>
        )}
      </div>
      <h1 id='Rogni Naan' className="w-[95%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10">
        Rogni Naan 🍽️
      </h1>

      <div className="grid sm:grid-cols-1 lg:grid-cols-4 rounded-lg gap-5 w-[80%] p-5">
        {rogniItems.length > 0 ? (
          rogniItems.map((event) => (
              <Card key = {event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No items found.</p>
        )}
      </div>
      <h1 id='Aloo Wala Naan' className="w-[95%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10">
        Aloo Wala Naan 🍽️
      </h1>

      <div className="grid sm:grid-cols-1 lg:grid-cols-4 rounded-lg gap-5 w-[80%] p-5">
        {alooItems.length > 0 ? (
          alooItems.map((event) => (
              <Card key = {event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No items found.</p>
        )}
      </div>
      <h1 id='Besaan Wala Naan' className="w-[95%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10">
        Besaan Wala Naan 🍽️
      </h1>

      <div className="grid sm:grid-cols-1 lg:grid-cols-4 rounded-lg gap-5 w-[80%] p-5">
        {baisanItems.length > 0 ? (
          baisanItems.map((event) => (
              <Card key = {event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No items found.</p>
        )}
      </div>
      <h1 id='Tikka Boti' className="w-[95%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10">
        Tikka Boti 🍽️
      </h1>

      <div className="grid sm:grid-cols-1 lg:grid-cols-4 rounded-lg gap-5 w-[80%] p-5">
        {tikkaItems.length > 0 ? (
          tikkaItems.map((event) => (
              <Card key = {event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No items found.</p>
        )}
      </div>
      <h1 id='Kabab Roll' className="w-[95%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10">
        Kabab Roll 🍽️
      </h1>

      <div className="grid sm:grid-cols-1 lg:grid-cols-4 rounded-lg gap-5 w-[80%] p-5">
        {kababItems.length > 0 ? (
          kababItems.map((event) => (
              <Card key = {event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No items found.</p>
        )}
      </div>
      <h1 id='Pratha' className="w-[95%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10">
        Pratha 🍽️
      </h1>

      <div className="grid sm:grid-cols-1 lg:grid-cols-4 rounded-lg gap-5 w-[80%] p-5">
        {prathaItems.length > 0 ? (
          prathaItems.map((event) => (
              <Card key = {event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No items found.</p>
        )}
      </div>
      <h1 id="Regular Items" className="w-[95%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10">
        Regular Items 🍽️
      </h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 rounded-lg gap-5 w-[80%] p-5">
        {regularItems.length > 0 ? (
          regularItems.map((event) => (
              <Card key = {event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No regular items found.</p>
        )}
      </div>
      <h1 id='Side' className="w-[95%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10">
        Side Items 🍽️
      </h1>

      <div className="grid sm:grid-cols-1 lg:grid-cols-4 rounded-lg gap-5 w-[80%] p-5">
        {sideItems.length > 0 ? (
          sideItems.map((event) => (
              <Card key = {event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No side items found.</p>
        )}
      </div>
      <Footer/>
    </div>
  )
}

export default MenuPage