'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Flame, UtensilsCrossed, MessageCircle, Phone } from 'lucide-react';
import { SiFoodpanda } from 'react-icons/si';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/Menu', label: 'Menu', icon: <UtensilsCrossed size={14} /> },
    { href: '/Chat', label: 'Chat Support', icon: <MessageCircle size={14} /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white font-bold text-base hover:text-red-400 transition-colors flex-shrink-0"
        >
          <Flame className="text-red-600 flex-shrink-0" size={20} />
          <span className="hidden sm:block">Haq Bahu Naan</span>
          <span className="block sm:hidden">HBT</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/60 rounded-md transition-all duration-150 font-medium"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <a
            href="https://www.foodpanda.pk/restaurant/w6kj/haq-bahu-naan-shop"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-pink-400 hover:text-pink-300 text-sm transition-colors"
          >
            <SiFoodpanda size={15} />
            <span>Foodpanda</span>
          </a>
          <a
            href="https://wa.me/923094130285"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-green-700 hover:bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
          >
            <Phone size={13} />
            Order Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-zinc-300 hover:text-white transition-colors p-1.5 rounded-md hover:bg-zinc-800"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 px-4 py-3 flex flex-col gap-1 animate-slide-down">
          {navLinks.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors text-sm font-medium"
            >
              {icon && <span className="text-zinc-500">{icon}</span>}
              {label}
            </Link>
          ))}

          <div className="border-t border-zinc-800 mt-2 pt-3 flex flex-col gap-2">
            <a
              href="https://www.foodpanda.pk/restaurant/w6kj/haq-bahu-naan-shop"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-pink-400 hover:text-pink-300 text-sm transition-colors"
            >
              <SiFoodpanda size={16} />
              Available on Foodpanda
            </a>
            <a
              href="https://wa.me/923094130285"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              <Phone size={15} />
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
