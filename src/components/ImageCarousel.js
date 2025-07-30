'use client';

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  {
    url: 'deal1.png',
    message: `Crazy Deal 1\n2 Pizza Naan + 500 ml Cola Next\nSet Quantity: 1`,
  },
  {
    url: 'deal2.png',
    message: `Crazy Deal 2\n5 Beef/Chicken Naan + 500 ml Cola Next\nSet Quantity: 1`,
  },
  {
    url: 'deal3.png',
    message: `Crazy Deal 3\n5 Aloo Naan + 500 ml Cola Next + 1 Raita\nSet Quantity: 1`,
  },
];

const INTERVAL = 4000;
const WHATSAPP_NUMBER = '923094130285'; // Replace with your number

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, INTERVAL);

    return () => clearInterval(interval);
  }, [paused]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setPaused(true);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setPaused(true);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
    setPaused(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
    setPaused(false);
  };

  const handleBuyNow = () => {
    if (!selectedImage) return;

    const message = selectedImage.message;
    navigator.clipboard.writeText(message);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="relative w-full h-[100px] md:w-full md:h-[400px] overflow-hidden bg-black">
      {images.map((image, index) => (
        <div
          key={index}
          onClick={() => openModal(image)}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out cursor-pointer ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={image.url}
            alt={`Slide ${index}`}
            className="w-full h-full"
          />
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 z-20"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 z-20"
      >
        <FaChevronRight />
      </button>

      {/* Modal */}
      {showModal && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-md p-4 max-w-md w-full relative shadow-xl">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black hover:text-red-500 text-xl font-bold"
            >
              ×
            </button>
            <img
              src={selectedImage.url}
              alt="Selected Deal"
              className="w-full max-h-[300px] object-contain mb-4"
            />
            <button
              onClick={handleBuyNow}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Buy Now on WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
