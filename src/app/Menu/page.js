"use client"
import React, {useState, useEffect} from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from 'next/link';
import Card from '@/components/Card1'
import { details } from '@/components/ItemDetails';
import Banner from '@/components/banner';
import Footer from '@/components/footer'
import ImageCarousel from '@/components/ImageCarousel';


function MenuPage() {
  const [showChatMsg, setShowChatMsg] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatMsg(false);
        }, 10000); // 10 seconds
        return () => clearTimeout(timer); // cleanup on unmount
      }, []);
    const [selectedGenre, setSelectedGenre] = useState("All");
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
        <ImageCarousel/>
        <div className='relative-inline-block w-full h-70 bg-cover bg-center bg-no-repeat mb-5'>
            <Link href ={"/"}>
                <h1 className=' bg-slate-900 rounded-lg flex text-white p-1 m-2 absolute top-23 left-0 md:top-96 md:left-0'>
                    <span><IoMdArrowRoundBack size={20}/></span>
                    <span>back</span>
                </h1>
            </Link>
        </div>
      <div className="w-full overflow-x-auto mt-6 mb-4 sticky top-1 z-20 bg-gray-950 flex">
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

      <div>
        <a href='/Haq-Bahu-MENU.pdf'
        download={true}
        className='bg-gray-700 font-semibold absolute right-2 md:right-5 text-gray-200 text-sm rounded-lg px-4 py-2 hover:opacity-90 transition'>
          Download Menu
        </a>
      </div>

      <h1 id="All" className="w-[100%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10">
        Special Items 🍽️
      </h1>

      <div className="w-full overflow-x-auto gap-5 p-5">
        <div className="flex gap-4 w-max sm:w-max">
        {specialItems.length > 0 ? (
          specialItems.map((event) => (
              <Card key = {event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No items found.</p>
        )}
      </div>
      </div>
      <h1 id='Mutton Naan' className="w-[100%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10">
        Mutton Items 🍽️
      </h1>

      <div className="w-full overflow-x-auto gap-5 p-5">
        <div className="flex gap-4 w-max sm:w-max">
          {muttonItems.length > 0 ? (
            muttonItems.map((event) => (
              <Card
                key={event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No items found.</p>
          )}
        </div>
      </div>

      <h1 id='Beef Qeema Naan' className="w-[100%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10">
        Beef Naan 🍽️
      </h1>

      <div className="w-full overflow-x-auto gap-5 p-5">
        <div className="flex gap-4 w-max sm:w-max">
        {beefItems.length > 0 ? (
          beefItems.map((event) => (
              <Card key = {event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No items found.</p>
        )}
      </div>
      </div>
      <h1 id='Chicken Naan' className="w-[100%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10">
        Chicken Naan 🍽️
      </h1>

      <div className="w-full overflow-x-auto gap-5 p-5">
        <div className="flex gap-4 w-max sm:w-max">
        {chickenItems.length > 0 ? (
          chickenItems.map((event) => (
              <Card key = {event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No items found.</p>
        )}
      </div>
      </div>
      <h1 id='Rogni Naan' className="w-[100%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10">
        Rogni Naan 🍽️
      </h1>

      <div className="w-full overflow-x-auto gap-5 p-5">
        <div className="flex gap-4 w-max sm:w-max">
        {rogniItems.length > 0 ? (
          rogniItems.map((event) => (
              <Card key = {event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No items found.</p>
        )}
      </div>
      </div>
      <h1 id='Aloo Wala Naan' className="w-[100%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10">
        Aloo Wala Naan 🍽️
      </h1>

      <div className="w-full overflow-x-auto gap-5 p-5">
        <div className="flex gap-4 w-max sm:w-max">
        {alooItems.length > 0 ? (
          alooItems.map((event) => (
              <Card key = {event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No items found.</p>
        )}
      </div>
      </div>
      <h1 id='Besaan Wala Naan' className="w-[100%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10">
        Besaan Wala Naan 🍽️
      </h1>

      <div className="w-full overflow-x-auto gap-5 p-5">
        <div className="flex gap-4 w-max sm:w-max">        {baisanItems.length > 0 ? (
          baisanItems.map((event) => (
              <Card key = {event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No items found.</p>
        )}
      </div>
      </div>
      <h1 id='Tikka Boti' className="w-[100%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10">
        Tikka Boti 🍽️
      </h1>

      <div className="w-full overflow-x-auto gap-5 p-5">
        <div className="flex gap-4 w-max sm:w-max">        {tikkaItems.length > 0 ? (
          tikkaItems.map((event) => (
              <Card key = {event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No items found.</p>
        )}
      </div>
      </div>
      <h1 id='Kabab Roll' className="w-[100%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10">
        Kabab Roll 🍽️
      </h1>

      <div className="w-full overflow-x-auto gap-5 p-5">
        <div className="flex gap-4 w-max sm:w-max">      {kababItems.length > 0 ? (
          kababItems.map((event) => (
              <Card key = {event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No items found.</p>
        )}
      </div>
      </div>
      <h1 id='Pratha' className="w-[100%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10">
        Pratha 🍽️
      </h1>

      <div className="w-full overflow-x-auto gap-5 p-5">
        <div className="flex gap-4 w-max sm:w-max">        {prathaItems.length > 0 ? (
          prathaItems.map((event) => (
              <Card key = {event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No items found.</p>
        )}
      </div>
      </div>

      <h1 id="Regular Items" className="w-[100%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10">
        Regular Items 🍽️
      </h1>
      <div className="w-full overflow-x-auto gap-5 p-5">
        <div className="flex gap-4 w-max sm:w-max">        {regularItems.length > 0 ? (
          regularItems.map((event) => (
              <Card key = {event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No regular items found.</p>
        )}
      </div>
      </div>
      <h1 id='Side' className="w-[100%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10">
        Side Items 🍽️
      </h1>

      <div className="w-full overflow-x-auto gap-5 p-5">
        <div className="flex gap-4 w-max sm:w-full">        {sideItems.length > 0 ? (
          sideItems.map((event) => (
              <Card key = {event.id} id={event.id} pic={event.pic} title={event.title} genre={event.genre} address={event.address} price={event.price} description={event.description}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No side items found.</p>
        )}
      </div>
      </div>
      <div className="fixed bottom-4 right-4 z-50 flex items-center space-x-2">
        {showChatMsg && (
          <span className="bg-gray-300 text-gray-900 text-md md:text-xl px-3 py-1 rounded shadow-lg animate-fade-in">
            For Chat Support
          </span>
        )}
        <Link href={"/Chat"}>
        <img
          src="/chatbot.png"
          alt="Chat Support"
          className="w-12 h-12 md:w-36 md:h-36 cursor-pointer"
        /></Link>
      </div>
      <Footer/>
    </div>
  )
}

export default MenuPage