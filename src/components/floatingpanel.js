import React from 'react';


function FloatingTogglePanel({ toggleItems, onClose }) {
    if (!toggleItems || toggleItems.length === 0) return null;
  
    return (
      <div
        className="fixed bottom-7 md:top-6 md:right-10 right-6 max-w-xs w-72 max-h-96 bg-gray-900 text-white rounded-lg shadow-2xl p-4 overflow-y-auto z-50
        flex flex-col gap-3"
      >
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-lg">Available Options</h3>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-400 transition"
            aria-label="Close options"
          >
            &#10005; {/* simple X */}
          </button>
        </div>
  
        {toggleItems.map((item, i) => (
          <a
            key={i}
            href={item.link}
            className="bg-yellow-700 px-3 py-2 rounded-md shadow hover:shadow-md transition text-white text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.label}
          </a>
        ))}
      </div>
    );
  }
  export default FloatingTogglePanel;