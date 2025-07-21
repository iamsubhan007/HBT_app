"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AiOutlineBars } from "react-icons/ai"
import { SiFoodpanda } from "react-icons/si"
import Card from '@/components/Card2'
import { items } from '@/components/Items'
import Banner from '@/components/banner'
import Footer from '@/components/footer'
import FloatingTogglePanel from '@/components/floatingpanel'

function Homepage() {
  const [showChatMsg, setShowChatMsg] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatMsg(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  const [activeCardId, setActiveCardId] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const handleCardClick = (id) => {
    setActiveCardId((prev) => (prev === id ? null : id)); // toggle on/off
  };
  const activeCard = items.find((item) => item.id === activeCardId);
  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.genre.toLowerCase().includes(searchTerm.toLowerCase());
  
    const matchesGenre =
      selectedGenre === "All"
        ? true
        : item.genre.toLowerCase() === selectedGenre.toLowerCase();
  
    return matchesSearch && matchesGenre;
  });
  
  const genres = ["All", "Special", "Mutton", "Beef","Chicken", "Regular", "Pratha","Aloo", "Besaan", "Tikka Boti", "Kabab Roll", "Side"];


  return (
    <div className='min-h-screen flex flex-col items-center'>
      <Banner/>
      <button
        onClick={() => setExpanded(!expanded)}
        className="bg-gray-900 absolute top-2 right-2 text-sm md:text-xl hover:scale-110 px-6 py-3 rounded-full text-white hover:bg-gray-900 transition"
      >
        {expanded ? "Collapse" : <AiOutlineBars />}
      </button>

      <div className="m-6 rounded-md bg-gray-200 text-gray-700 shadow-lg">
        <input
          type="text"
          placeholder="Search by title or genre..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div> 
      
      <div className="fixed bottom-4 right-4 z-50 flex items-center space-x-2">
        {showChatMsg && (
          <span className="bg-gray-300 text-gray-900 text-md px-3 py-1 rounded shadow-lg animate-fade-in">
            For Chat Support
          </span>
        )}
        <Link href={"/Chat"}>
        <img
          src="/chatbot.png"
          alt="Chat Support"
          className="w-12 h-12 cursor-pointer"
        /></Link>
      </div>

      {/* Genre Filter Bar*/}
      <div className="w-full md:w-full overflow-x-auto whitespace-nowrap sticky top-1 z-50 mb-4 bg-gray-950 flex">
        <div className="flex space-x-3 px-4 py-2">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-200
                ${selectedGenre === genre
                  ? "bg-red-700 text-white"
                  : "bg-gray-600 text-gray-50 hover:bg-gray-300"}`}
            >
              {genre.charAt(0).toUpperCase() + genre.slice(1)}
            </button>
          ))}
        </div>
      </div>


      {/* Dropdown Menu */}
      <div
        className={`absolute top-16 right-2 w-64 md:w-64 bg-gray-900 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden border border-gray-700 ${
          expanded ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-3 p-4">
          {/* Menu Button */}
          <li>
            <Link href="/Menu">
              <Button className="w-full py-1 md:py-2 text-white bg-gray-700 hover:bg-gray-800 transition rounded-lg">
                Menu
              </Button>
            </Link>
          </li>

          {/* Foodpanda Link */}
          <li>
            <Link href="https://www.foodpanda.pk/restaurant/w6kj/haq-bahu-naan-shop" target="_blank">
              <div className="flex items-center gap-2 bg-gray-700 text-white px-2 p-1 rounded-lg hover:opacity-90 transition">
                <span className="font-semibold text-sm">Available at Foodpanda</span>
                <SiFoodpanda className="text-pink-500" size={20} />
              </div>
            </Link>
          </li>

          <li>
            <a href="https://wa.me/923094130285" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-gray-700 text-sm text-white px-3 py-2 rounded-lg hover:opacity-90 transition">
                Chat with us on WhatsApp
            </a>
          </li>
        </ul>
      </div>
      

      <div className='flex flex-col items-center font-bold'>
        <Link href="/Menu">
          <h1 className="w-50 p-4 bg-slate-950 rounded shadow text-white">
            Show Complete Menu
          </h1>
        </Link>
      </div>

      <h1 className="w-[95%] p-2 md:p-4 bg-gradient-to-r from-yellow-500 to-red-950 font-bold rounded shadow text-opacity-80 text-red-950 text-lg md:text-2xl m-5">
        {selectedGenre} Items 🥘
      </h1>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:w-[80%] w-[80%] h-full lg:items-center p-5">
        {filteredItems.length > 0 ? (
            filteredItems.map((event) => (
              <div key={event.id} className="mr-2 flex flex-col items-center">
                <Card
                  {...event}
                  isActive={activeCardId === event.id}
                  onClick={() => handleCardClick(event.id)}
                />
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">No items found.</p>
          )}
      </div>

      {/* Floating toggle panel */}
      {activeCard && activeCard.toggleItems && (
        <FloatingTogglePanel
          toggleItems={activeCard.toggleItems}
          onClose={() => setActiveCardId(null)}
        />
      )}

      <Footer/>
    </div>
  );
}

export default Homepage;
