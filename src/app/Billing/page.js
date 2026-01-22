// app/billing/page.js
'use client';

import React, { useEffect, useState } from 'react';

const DEFAULT_ITEMS = [
    { id: 1, name: "Nutella", price: 500 },
  
    { id: 2, name: "Tandoori Pizza", price: 500 },
    { id: 3, name: "Tandoori Shawarma", price: 400 },
    { id: 4, name: "Cheese Naan", price: 400 },
  
    { id: 6, name: "Special Mutton Qeema Naan", price: 800 },
    { id: 5, name: "Special Mutton Achaari Naan", price: 850 },
    { id: 12, name: "Special Mutton Rogni Naan", price: 870 },
    { id: 15, name: "Special Mutton Makhan Rogni Naan", price: 900 },
    { id: 11, name: "Special Mutton Achaari Rogni Naan", price: 920 },
    { id: 14, name: "Special Mutton Achaari Makhan Rogni Naan", price: 950 },
    { id: 9, name: "Special Mutton Makhan Rogni Naan", price: 970 },
    { id: 16, name: "Special Mutton Cheese Naan", price: 1000 },
    { id: 8, name: "Special Mutton Achaari Makhan Rogni Naan", price: 1020 },
    { id: 10, name: "Special Mutton Cheese Rogni Naan", price: 1070 },
    { id: 13, name: "Special Mutton Cheese Makhan Naan", price: 1100 },
    { id: 7, name: "Special Mutton Cheese Makhan Rogni Naan", price: 1170 },
  
    { id: 40, name: "Chicken Qeema Naan", price: 250 },
    { id: 39, name: "Chicken Achaari Naan", price: 300 },
    { id: 28, name: "Chicken Rogni Naan", price: 320 },
    { id: 34, name: "Chicken Makhan Naan", price: 350 },
    { id: 27, name: "Chicken Achaari Rogni Naan", price: 370 },
    { id: 38, name: "Chicken Cheese Naan", price: 370 },
    { id: 33, name: "Chicken Achaari Makhan Naan", price: 400 },
    { id: 37, name: "Special Chicken Qeema Naan", price: 400 },
    { id: 22, name: "Chicken Makhan Rogni Naan", price: 420 },
    { id: 24, name: "Special Chicken Achaari Rogni Naan", price: 420 },
    { id: 26, name: "Chicken Cheese Rogni Naan", price: 440 },
    { id: 36, name: "Special Chicken Achaari Naan", price: 450 },
    { id: 21, name: "Chicken Achaari Makhan Rogni Naan", price: 470 },
    { id: 25, name: "Special Chicken Rogni Naan", price: 470 },
    { id: 32, name: "Chicken Cheese Makhan Naan", price: 470 },
    { id: 31, name: "Special Chicken Makhan Naan", price: 500 },
    { id: 35, name: "Special Chicken Cheese Naan", price: 500 },
    { id: 30, name: "Special Chicken Achaari Makhan Naan", price: 550 },
    { id: 20, name: "Chicken Cheese Makhan Rogni Naan", price: 540 },
    { id: 23, name: "Special Chicken Cheese Rogni Naan", price: 570 },
    { id: 19, name: "Special Chicken Makhan Rogni Naan", price: 570 },
    { id: 29, name: "Special Chicken Cheese Makhan Naan", price: 600 },
    { id: 18, name: "Special Chicken Achaari Makhan Rogni Naan", price: 620 },
    { id: 17, name: "Special Chicken Cheese Makhan Rogni Naan", price: 670 },
  
    { id: 64, name: "Beef Qeema Naan", price: 250 },
    { id: 63, name: "Beef Achaari Naan", price: 300 },
    { id: 52, name: "Beef Rogni Naan", price: 320 },
    { id: 58, name: "Beef Makhan Naan", price: 350 },
    { id: 51, name: "Beef Achaari Rogni Naan", price: 370 },
    { id: 62, name: "Beef Cheese Naan", price: 370 },
    { id: 57, name: "Beef Achaari Makhan Naan", price: 400 },
    { id: 61, name: "Special Beef Qeema Naan", price: 400 },
    { id: 46, name: "Beef Makhan Rogni Naan", price: 420 },
    { id: 48, name: "Special Beef Achaari Rogni Naan", price: 420 },
    { id: 50, name: "Beef Cheese Rogni Naan", price: 440 },
    { id: 60, name: "Special Beef Achaari Naan", price: 450 },
    { id: 45, name: "Beef Achaari Makhan Rogni Naan", price: 470 },
    { id: 49, name: "Special Beef Rogni Naan", price: 470 },
    { id: 56, name: "Beef Cheese Makhan Naan", price: 470 },
    { id: 55, name: "Special Beef Makhan Naan", price: 500 },
    { id: 59, name: "Special Beef Cheese Naan", price: 500 },
    { id: 44, name: "Beef Cheese Makhan Rogni Naan", price: 540 },
    { id: 54, name: "Special Beef Achaari Makhan Naan", price: 550 },
    { id: 43, name: "Special Beef Makhan Rogni Naan", price: 570 },
    { id: 47, name: "Special Beef Cheese Rogni Naan", price: 570 },
    { id: 53, name: "Special Beef Cheese Makhan Naan", price: 600 },
    { id: 42, name: "Special Beef Achaari Makhan Rogni Naan", price: 620 },
    { id: 41, name: "Special Beef Cheese Makhan Rogni Naan", price: 670 },
  
    { id: 75, name: "Half Rogni Naan", price: 60 },
    { id: 74, name: "Special Milky Rogni Naan", price: 100 },
    { id: 66, name: "Special Kalwangi Rogni Naan", price: 120 },
    { id: 67, name: "Special Zeree Wala Rogni Naan", price: 120 },
    { id: 68, name: "Special Till Wala Rogni Naan", price: 120 },
    { id: 71, name: "Special Zeree Wala Rogni Naan", price: 120 },
    { id: 72, name: "Special Till Wala Rogni Naan", price: 120 },
    { id: 73, name: "Special Garlic Rogni Naan", price: 120 },
    { id: 65, name: "Special Milky Makhan Rogni Naan", price: 160 },
    { id: 69, name: "Special Garlic Makhan Rogni Naan", price: 180 },
    { id: 70, name: "Special Kalwangi Makhan Rogni Naan", price: 180 },
  
    { id: 77, name: "Aloo Wala Naan", price: 100 },
    { id: 76, name: "Special Aloo Wala Naan", price: 150 },
    { id: 82, name: "Special Aloo Achaari Naan", price: 180 },
    { id: 80, name: "Special Aloo Makhan Naan", price: 200 },
    { id: 79, name: "Special Aloo Makhan Achaari Naan", price: 220 },
    { id: 81, name: "Special Aloo Cheese Naan", price: 250 },
    { id: 78, name: "Special Aloo Makhan Cheese Naan", price: 300 },
  
    { id: 83, name: "Besaan Wala Naan", price: 100 },
    { id: 84, name: "Besaan Achaari Naan", price: 150 },
    { id: 85, name: "Special Besaan Makhan Naan", price: 200 },
  
    { id: 89, name: "Chicken Tikka Boti Naan", price: 300 },
    { id: 87, name: "Chicken Makhan Tikka Boti Naan", price: 400 },
    { id: 88, name: "Special Chicken Boti Tikka Naan", price: 450 },
    { id: 86, name: "Special Chicken Makhan Tikka Boti Naan", price: 550 },
  
    { id: 91, name: "Chicken Kabbab Roll", price: 120 },
    { id: 90, name: "Chicken Cheese Kabbab Roll", price: 200 },
  
    { id: 95, name: "Special Pratha", price: 100 },
    { id: 93, name: "Special Achari Pratha", price: 150 },
    { id: 94, name: "Special Meetha Pratha", price: 150 },
    { id: 92, name: "Special Makhan Pratha", price: 160 },
  
    { id: 100, name: "Sada Naan", price: 25 },
    { id: 101, name: "Khamiri Roti", price: 25 },
    { id: 98, name: "Kulcha", price: 30 },
    { id: 99, name: "Special Sada Naan", price: 45 },
    { id: 97, name: "Special Kulcha", price: 50 },
    { id: 96, name: "Pratha", price: 100 },
  
    { id: 102, name: "Raita", price: 50 },
  ];
  

export default function BillingAnalyticsPage() {
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [note, setNote] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filterItem, setFilterItem] = useState('');

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('sales-items')) || DEFAULT_ITEMS.map(i => ({ ...i, qty: 0 })));
    setOrders(JSON.parse(localStorage.getItem('sales-orders')) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem('sales-items', JSON.stringify(items));
    localStorage.setItem('sales-orders', JSON.stringify(orders));
  }, [items, orders]);

  const addOrder = () => {
    const selected = items.filter(i => i.qty > 0);
    if (!selected.length) return;

    const now = new Date();
    const order = {
      id: Date.now(),
      date: now.toISOString().split('T')[0],
      time: now.toLocaleTimeString(),
      note,
      items: selected.map(i => ({ ...i })),
    };

    setOrders([order, ...orders]);
    setItems(items.map(i => ({ ...i, qty: 0 })));
    setNote('');
  };

  const updateOrderQty = (orderId, itemId, qty) => {
    setOrders(orders.map(o =>
      o.id === orderId
        ? { ...o, items: o.items.map(i => i.id === itemId ? { ...i, qty } : i) }
        : o
    ));
  };

  const updateOrderNote = (orderId, value) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, note: value } : o));
  };

  const filteredOrders = orders.filter(o => {
    const dateMatch = filterDate ? o.date === filterDate : true;
    const itemMatch = filterItem ? o.items.some(i => i.name === filterItem) : true;
    return dateMatch && itemMatch;
  });

  const salesByDate = {};
  orders.forEach(o => {
    const total = o.items.reduce((s, i) => s + i.price * i.qty, 0);
    salesByDate[o.date] = (salesByDate[o.date] || 0) + total;
  });

  const downloadXLS = (mode) => {
    let csv = 'Date,Time,Note,Item,Price,Quantity,Total\n';

    orders.forEach(o => {
      if (mode === 'day' && filterDate && o.date !== filterDate) return;
      o.items.forEach(i => {
        csv += `${o.date},${o.time},${o.note},${i.name},${i.price},${i.qty},${i.price * i.qty}\n`;
      });
    });

    const blob = new Blob([csv], { type: 'application/vnd.ms-excel' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = mode === 'day' && filterDate ? `sales_${filterDate}.xls` : 'sales_all.xls';
    a.click();
  };

  const closeDay = () => {
    if (!confirm('Are you sure you want to close the day?')) return;
    localStorage.removeItem('sales-items');
    localStorage.removeItem('sales-orders');
    setOrders([]);
    setItems(DEFAULT_ITEMS.map(i => ({ ...i, qty: 0 })));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-950 to-purple-950 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl bg-gradient-to-r from-purple-700 to-blue-600 font-bold mb-6">📊 Complete Sales Dashboard</h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6 text-white">
          <input type="date" value={filterDate} onChange={e => setFilterDate(e.target.value)} className="border bg-gradient-to-r from-purple-700 to-blue-600 px-3 py-2 rounded" />
          <select value={filterItem} onChange={e => setFilterItem(e.target.value)} className="border bg-gradient-to-r from-purple-700 to-blue-600 text-black px-3 py-2 rounded">
            <option value="">All Items</option>
            {DEFAULT_ITEMS.map(i => <option key={i.id}>{i.name}</option>)}
          </select>
          <button onClick={() => { setFilterDate(''); setFilterItem(''); }} className="px-4 py-2 bg-gradient-to-r from-purple-700 to-blue-600 rounded">Reset</button>
        </div>

        {/* Item Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {items.map(item => (
            <div key={item.id} className="bg-gradient-to-r from-purple-700 to-blue-600 text-white p-4 rounded-xl shadow">
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-sm">Rs {item.price}</p>
              <input type="number" min="0" value={item.qty} onChange={e => setItems(items.map(i => i.id === item.id ? { ...i, qty: Number(e.target.value) } : i))} className="mt-2 w-full border text-black bg-white px-3 py-2 rounded" />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 m-4">
          <textarea value={note} onChange={e => setNote(e.target.value)} 
            placeholder="Order description (editable later)" 
            className="w-full border p-3 rounded" />
          <button onClick={addOrder} className="bg-green-600 text-white px-6 py-3 rounded-xl">
            Add Bill</button>
          <button onClick={() => downloadXLS('all')} className="bg-blue-600 text-white px-6 py-3 rounded-xl">
            Download All XLS</button>
          <button onClick={() => downloadXLS('day')} className="bg-indigo-600 text-white px-6 py-3 rounded-xl">
            Download Selected Day XLS</button>
          <button onClick={closeDay} className="bg-red-600 text-white px-6 py-3 rounded-xl">
            Close Day / Reset</button>
        </div>

        {/* Orders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {filteredOrders.map(order => (
            <div key={order.id} className="bg-gradient-to-r from-purple-700 to-blue-600 text-white p-6 rounded-xl shadow">
              <div className="text-sm text-white mb-2">{order.date} • {order.time}</div>
              <textarea value={order.note} onChange={e => updateOrderNote(order.id, e.target.value)} className="w-full border p-2 text-black rounded mb-3" />
              {order.items.map(i => (
                <div key={i.id} className="flex justify-between items-center mb-2">
                  <span>{i.name}</span>
                  <input type="number" min="0" value={i.qty} onChange={e => updateOrderQty(order.id, i.id, Number(e.target.value))} className="w-20 border text-black px-2 py-1 rounded" />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Sales per Day */}
        <div className="bg-gradient-to-r from-purple-700 to-blue-600 text-white p-6 rounded-xl shadow mb-6">
          <h2 className="font-bold mb-3">📅 Sales per Day</h2>
          {Object.entries(salesByDate).map(([d, v]) => (
            <div key={d} className="flex justify-between"><span>{d}</span><span>Rs {v}</span></div>
          ))}
        </div>
      </div>
    </div>
  );
}