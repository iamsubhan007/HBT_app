// A master Framer Motion demo page with examples of all major animations & effects
// TailwindCSS used for styling

"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MotionMasterDemo() {
  const [showBox, setShowBox] = useState(true);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [theme, setTheme] = useState("red-950");

  const toggleTheme = () => setTheme(theme === "red-950" ? "blue-950" : "red-950");

  return (
    <div className={`min-h-screen p-8 bg-${theme} text-white space-y-8`}>
      <h1 className="text-4xl font-bold text-center">Framer Motion Animation Showcase</h1>

      {/* Theme Toggle */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        className="px-6 py-2 bg-white text-black rounded shadow hover:bg-gray-300"
        onClick={toggleTheme}
      >
        Toggle Theme
      </motion.button>

      {/* Fade In / Out */}
      <div>
        <h2 className="text-2xl">Fade In/Out</h2>
        <button onClick={() => setShowBox(!showBox)} className="mt-2 bg-white text-black px-4 py-1 rounded">Toggle Box</button>
        <AnimatePresence>
          {showBox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-4 w-32 h-32 bg-yellow-400 rounded"
            />
          )}
        </AnimatePresence>
      </div>

      {/* Slide In / Out */}
      <motion.div
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-64 p-4 bg-slate-950 rounded shadow"
      >
        Slide In from Left
      </motion.div>

      {/* Scale & Rotate */}
      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        className="w-32 h-32 bg-purple-500 rounded-full flex items-center justify-center"
      >
        Hover Me
      </motion.div>

      {/* Accordion (Expand/Collapse) */}
      <div>
        <h2 className="text-2xl">Accordion Effect</h2>
        <button onClick={() => setAccordionOpen(!accordionOpen)} className="bg-white text-black px-4 py-1 rounded mt-2">Toggle</button>
        <AnimatePresence>
          {accordionOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden bg-white text-black mt-2 p-4 rounded"
            >
              This is the accordion content. Click again to collapse.
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Keyframe Animation */}
      <motion.div
        animate={{ scale: [1, 1.5, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-20 h-20 bg-pink-500 rounded shadow"
      />

      {/* Staggered Animation */}
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3
            }
          }
        }}
        className="space-y-2"
      >
        {["First", "Second", "Third"].map((item, i) => (
          <motion.li
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="bg-white text-black px-4 py-2 rounded"
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>

      {/* Viewport Triggered Animation */}
      <motion.div
        whileInView={{ scale: 1.2, opacity: 1 }}
        initial={{ opacity: 0.3, scale: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-40 h-40 bg-blue-400 mt-12 mx-auto rounded shadow"
      >
        Scroll into view
      </motion.div>
    </div>
  );
}