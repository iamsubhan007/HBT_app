"use client"
import React, { useState, useEffect } from 'react';
import { Download, ShoppingCart, X, Plus, Minus, MessageCircle } from 'lucide-react';
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
    "Side",
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
    <div className="min-h-screen flex flex-col bg-background">
      <Banner />
      <ImageCarousel />

      {/* Page header bar */}
      <div className="bg-zinc-950 px-4 sm:px-6 py-3 flex items-center justify-between gap-3 border-b border-zinc-800">
        <div>
          <h1 className="text-white font-bold text-base sm:text-lg">Full Menu</h1>
          <p className="text-zinc-400 text-xs">Browse all categories</p>
        </div>
        <a
          href="/Haq-Bahu-MENU.pdf"
          download
          className="flex items-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 text-xs font-medium px-3 py-2 rounded-lg transition-colors flex-shrink-0"
        >
          <Download size={13} />
          Download Menu
        </a>
      </div>

      {/* Genre Navigation — sticky below navbar */}
      <div className="w-full overflow-x-auto sticky top-14 z-20 bg-zinc-950 border-b border-zinc-800/70">
        <div className="flex gap-2 px-4 py-2.5 min-w-max">
          {genres.map((genre) => (
            <a
              key={genre}
              href={genre === "All" ? "#" : `#${genre}`}
              onClick={() => setSelectedGenre(genre)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200
                ${selectedGenre === genre
                  ? "bg-red-700 text-white shadow-sm"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                }`}
            >
              {genre}
            </a>
          ))}
        </div>
      </div>

      {/* Menu Sections */}
      <div className="flex-1">
        {Object.entries(groupedItems).map(([genre, genreItems]) => (
          genreItems.length > 0 && (
            <div key={genre} id={genre} className="scroll-mt-28">
              {/* Category Header */}
              <div className="px-4 sm:px-6 pt-8 pb-3">
                <h2 className="text-lg sm:text-xl font-bold text-zinc-900 flex items-center gap-2">
                  <span className="w-1 h-6 bg-red-700 rounded-full inline-block" />
                  {genre}
                </h2>
                <p className="text-xs text-zinc-400 ml-3 mt-0.5">{genreItems.length} items</p>
              </div>

              {/* Horizontal scroll row of cards */}
              <div className="overflow-x-auto px-4 sm:px-6 pb-4">
                <div className="flex gap-3 w-max pb-1">
                  {genreItems.map((event) => (
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
                  ))}
                </div>
              </div>

              {/* Separator */}
              <div className="mx-4 sm:mx-6 border-b border-zinc-100" />
            </div>
          )
        ))}
      </div>

      {/* Floating chat button */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
        {showChatMsg && (
          <span className="bg-zinc-900 text-white text-xs px-3 py-1.5 rounded-full shadow-lg animate-fade-in whitespace-nowrap">
            Chat Support
          </span>
        )}
        <Link href="/Chat">
          <img
            src="/chatbot.png"
            alt="Chat Support"
            className="w-14 h-14 cursor-pointer hover:scale-110 transition-transform drop-shadow-lg"
          />
        </Link>
      </div>

      {/* Order Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-end sm:items-center justify-center px-0 sm:px-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="relative">
              <img
                src={selectedItem.pic}
                alt={selectedItem.title}
                className="w-full h-52 sm:h-56 object-cover"
              />
              {/* Price badge on image */}
              <span className="absolute top-3 right-3 bg-red-700 text-white text-sm font-bold px-3 py-1 rounded-full shadow">
                Rs.{selectedItem.price}
              </span>
              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 left-3 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
              {/* Genre chip on image */}
              <span className="absolute bottom-3 left-3 bg-black/55 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                {selectedItem.genre}
              </span>
            </div>

            {/* Modal body */}
            <div className="p-5 space-y-4">
              <div>
                <h2 className="text-lg font-bold text-zinc-900">{selectedItem.title}</h2>
                {selectedItem.description && (
                  <p className="text-sm text-zinc-500 mt-1">{selectedItem.description}</p>
                )}
              </div>

              {/* Quantity selector */}
              <div className="flex items-center justify-between bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3">
                <span className="text-sm font-medium text-zinc-700">Quantity</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-8 h-8 rounded-full border border-zinc-300 hover:border-red-500 hover:bg-red-50 flex items-center justify-center transition-colors"
                    aria-label="Decrease"
                  >
                    <Minus size={14} className="text-zinc-600" />
                  </button>
                  <span className="w-8 text-center font-bold text-zinc-900 text-base">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-8 h-8 rounded-full border border-zinc-300 hover:border-red-500 hover:bg-red-50 flex items-center justify-center transition-colors"
                    aria-label="Increase"
                  >
                    <Plus size={14} className="text-zinc-600" />
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-500">Total</span>
                <span className="font-bold text-lg text-zinc-900">Rs.{selectedItem.price * quantity}</span>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleBuyNow}
                className="w-full bg-green-700 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-sm"
              >
                <ShoppingCart size={16} />
                Order on WhatsApp
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
