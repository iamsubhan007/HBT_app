"use client"
import React, { useState } from 'react'
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
  const [activeCardId, setActiveCardId] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const handleCardClick = (id) => {
    setActiveCardId((prev) => (prev === id ? null : id)); // toggle on/off
  };
  const activeCard = items.find((item) => item.id === activeCardId);
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const [showBox, setShowBox] = useState(true);

  return (
    <div className='min-h-screen flex flex-col items-center'>
      <Banner/>
      <button
        onClick={() => setExpanded(!expanded)}
        className="bg-gray-900 absolute top-2 right-2 text-xl hover:scale-110 px-6 py-3 rounded-full text-white hover:bg-gray-900 transition"
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

      {/* Dropdown Menu */}
      <div
        className={`absolute top-16 right-2 w-64 bg-gray-900 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden border border-gray-700 ${
          expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-3 p-4">
          {/* Menu Button */}
          <li>
            <Link href="/Menu">
              <Button className="w-full py-2 text-white bg-gray-700 hover:bg-gray-800 transition rounded-lg">
                Menu
              </Button>
            </Link>
          </li>

          {/* Foodpanda Link */}
          <li>
            <Link href="https://www.foodpanda.pk/restaurant/w6kj/haq-bahu-naan-shop" target="_blank">
              <div className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
                <span className="font-semibold text-sm">Available at Foodpanda</span>
                <SiFoodpanda className="text-pink-500" size={24} />
              </div>
            </Link>
          </li>

          <li>
            <a href="https://wa.me/923094130285" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
                Chat with us on WhatsApp
            </a>
          </li>
        </ul>
      </div>
      

      <div className='flex flex-col items-center font-bold'>
        <Link href="/Menu">
          <h1 className="w-40 p-4 bg-slate-950 rounded shadow text-white">
            Show Menu
          </h1>
        </Link>
      </div>

      <h1 className="w-[95%] p-2 md:p-4 bg-gradient-to-r from-yellow-500 to-red-950 font-bold rounded shadow text-opacity-80 text-red-950 text-lg md:text-2xl m-5">
            Special Items 🥘
        </h1>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:w-[80%] w-full h-full lg:items-center p-5">
        {filteredItems.length > 0 ? (
            filteredItems.map((event) => (
              <div key={event.id} className="lg:w-full w-full flex flex-col items-center">
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
