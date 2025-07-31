"use client"
import React, { useState, useEffect } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from 'next/link';
import Card from '@/components/Card1';
import { details } from '@/components/ItemDetails';
import Banner from '@/components/banner';
import Footer from '@/components/footer';
import ImageCarousel from '@/components/ImageCarousel';

function MenuPage() {
  const [showChatMsg, setShowChatMsg] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const phoneNumber = '923094130285';

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatMsg(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleBuyNow = () => {
    if (!selectedItem) return;
    const message = `Item: ${selectedItem.title}\nQuantity: ${quantity}\nTotal Price: Rs.${selectedItem.price * quantity}`;
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, '_blank');
  };

  const genres = [
    "All",
    "Regular Items",
    "Mutton Naan",
    "Beef Qeema Naan",
    "Chicken Naan",
    "Rogni Naan",
    "Aloo Wala Naan",
    "Besaan Wala Naan",
    "Tikka Boti",
    "Kabab Roll",
    "Pratha",
    "Side"
  ];

  const groupedItems = {
    "Regular Items": details.filter(item => item.genre === "Regular Items"),
    "Special Items": details.filter(item => item.genre === "Special Items"),
    "Chicken Naan": details.filter(item => item.genre === "Chicken Naan"),
    "Beef Qeema Naan": details.filter(item => item.genre === "Beef Qeema Naan"),
    "Mutton Naan": details.filter(item => item.genre === "Mutton Naan"),
    "Besaan Wala Naan": details.filter(item => item.genre === "Besaan Wala Naan"),
    "Rogni Naan": details.filter(item => item.genre === "Rogni Naan"),
    "Aloo Wala Naan": details.filter(item => item.genre === "Aloo Wala Naan"),
    "Tikka Boti": details.filter(item => item.genre === "Tikka Boti"),
    "Kabab Roll": details.filter(item => item.genre === "Kabab Roll"),
    "Pratha": details.filter(item => item.genre === "Pratha"),
    "Side": details.filter(item => item.genre === "Side"),
  };

  return (
    <div className='min-h-screen flex flex-col items-center'>
      <Banner />
      <ImageCarousel />
      <div className='relative-inline-block w-full h-70 bg-cover bg-center bg-no-repeat mb-5'>
        <Link href={"/"}>
          <h1 className=' bg-slate-900 rounded-lg flex text-white p-1 m-2 absolute top-23 left-0 md:top-96 md:left-0'>
            <span><IoMdArrowRoundBack size={20} /></span>
            <span>back</span>
          </h1>
        </Link>
      </div>

      {/* Genre Navigation */}
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

      {/* Download Menu Button */}
      <div>
        <a
          href='/Haq-Bahu-MENU.pdf'
          download={true}
          className='bg-gray-700 font-semibold absolute right-2 md:right-5 text-gray-200 text-sm rounded-lg px-4 py-2 hover:opacity-90 transition'
        >
          Download Menu
        </a>
      </div>

      {/* Render Each Genre Section */}
      {Object.entries(groupedItems).map(([genre, items]) => (
        <div key={genre} className="w-full">
          <h1
            id={genre}
            className="w-[100%] p-2 md:p-4 bg-gradient-to-r from-gray-600 to-gray-700 font-bold rounded shadow text-opacity-80 text-white text-lg md:text-2xl mt-10"
          >
            {genre} 🍽️
          </h1>
          <div className="w-full overflow-x-auto gap-5 p-5">
            <div className="flex gap-4 w-max sm:w-max">
              {items.length > 0 ? (
                items.map((event) => (
                  <div
                    key={event.id}
                    className="cursor-pointer"
                    onClick={() => {
                      setSelectedItem(event);
                      setQuantity(1);
                    }}
                  >
                    <Card {...event} />
                  </div>
                ))
              ) : (
                <p className="text-center col-span-full text-gray-500">No items found.</p>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Floating Chat Icon */}
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
          />
        </Link>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">{selectedItem.title}</h2>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-gray-500 hover:text-red-600 text-lg font-bold"
              >
                ✕
              </button>
            </div>
            <div className="space-y-2">
              <img
                src={selectedItem.pic}
                alt={selectedItem.title}
                className="w-full h-48 object-cover rounded"
              />
              <p className="text-gray-700">{selectedItem.description}</p>
              <p className="text-sm text-gray-600">Genre: {selectedItem.genre}</p>
              <p className="text-sm text-gray-600">Address: {selectedItem.address}</p>
              <p className="text-lg font-semibold text-green-700">
                Price: Rs.{selectedItem.price}
              </p>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <label className="text-sm">Quantity:</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-20 border rounded px-2 py-1"
              />
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={handleBuyNow}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Buy Now
              </button>
              <button
                onClick={() => alert(`Quantity set to ${quantity}`)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Set Quantity
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default MenuPage;
