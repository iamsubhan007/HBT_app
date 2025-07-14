"use client"
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { items } from '@/components/Items';

function ProductPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const product = items.find(item => item.id === id);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (label) => {
    setCheckedItems(prev =>
      prev.includes(label)
        ? prev.filter(i => i !== label)
        : [...prev, label]
    );
  };

  if (!product) return <div className='text-white p-10'>Product not found</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="bg-white rounded-lg shadow-xl p-5 w-full max-w-4xl mx-auto">
        <img src={product.pic} className="w-full h-72 object-cover rounded-lg mb-4" />
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <h2 className="text-xl font-semibold mb-2">Available Options:</h2>
        <div className="grid gap-2">
          {product.toggleItems?.map((item, index) => (
            <label key={index} className="flex gap-2 items-center">
              <input
                type="checkbox"
                value={item.label}
                onChange={() => handleCheckboxChange(item.label)}
                checked={checkedItems.includes(item.label)}
              />
              <span>{item.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
