"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, UtensilsCrossed } from 'lucide-react'
import Card from '@/components/Card2'
import { items } from '@/components/Items'
import Banner from '@/components/banner'
import Footer from '@/components/footer'
import FloatingTogglePanel from '@/components/floatingpanel'
import ImageCarousel from '@/components/ImageCarousel'

function Homepage() {
  const [showChatMsg, setShowChatMsg] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatMsg(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const [activeCardId, setActiveCardId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const handleCardClick = (id) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  const activeCard = items.find((item) => item.id === activeCardId);

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.genre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre =
      selectedGenre === "All" ? true : item.genre.toLowerCase() === selectedGenre.toLowerCase();
    return matchesSearch && matchesGenre;
  });

  const genres = ["All", "Special", "Mutton", "Beef", "Chicken", "Regular", "Rogni", "Pratha", "Aloo", "Besaan", "Tikka Boti", "Kabab Roll", "Side"];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Banner />
      <ImageCarousel />

      {/* Search bar */}
      <div className="bg-background px-4 pt-5 pb-3">
        <div className="max-w-xl mx-auto relative">
          <Search
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
            size={16}
          />
          <input
            type="text"
            placeholder="Search items or categories..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-zinc-200 rounded-full text-sm text-zinc-800 placeholder-zinc-400
              focus:outline-none focus:ring-2 focus:ring-red-600/25 focus:border-red-600 transition-all shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Genre filter bar — sticky below navbar (top-14 = 56px navbar height) */}
      <div className="w-full overflow-x-auto sticky top-14 z-20 bg-zinc-950 border-b border-zinc-800/70 scrollbar-none">
        <div className="flex gap-2 px-4 py-2.5 min-w-max">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200
                ${selectedGenre === genre
                  ? "bg-red-700 text-white shadow-sm"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Items section */}
      <div className="flex-1 bg-background">
        {/* Section header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-7 pb-4 flex items-end justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
              {selectedGenre === "All" ? "All Items" : `${selectedGenre} Items`}
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">
              {filteredItems.length} item{filteredItems.length !== 1 ? "s" : ""} available
            </p>
          </div>
          <Link
            href="/Menu"
            className="flex items-center gap-1.5 text-sm font-medium text-red-700 hover:text-red-600 border border-red-700/40 hover:border-red-600 hover:bg-red-50 px-4 py-1.5 rounded-full transition-all duration-150"
          >
            <UtensilsCrossed size={14} />
            Full Menu
          </Link>
        </div>

        {/* Items grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
              {filteredItems.map((event) => (
                <Card
                  key={event.id}
                  {...event}
                  isActive={activeCardId === event.id}
                  onClick={() => handleCardClick(event.id)}
                />
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="py-24 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mb-4">
                <Search size={28} className="text-zinc-400" />
              </div>
              <p className="text-base font-semibold text-zinc-600">No items found</p>
              <p className="text-sm text-zinc-400 mt-1">Try a different search term or category</p>
              <button
                onClick={() => { setSearchTerm(""); setSelectedGenre("All"); }}
                className="mt-4 text-sm text-red-700 hover:text-red-600 font-medium underline underline-offset-2"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
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

      {/* Floating toggle panel (shown when a card is active) */}
      {activeCard && activeCard.toggleItems && (
        <FloatingTogglePanel
          toggleItems={activeCard.toggleItems}
          onClose={() => setActiveCardId(null)}
        />
      )}

      <Footer />
    </div>
  );
}

export default Homepage;
