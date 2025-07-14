"use client"
import React from 'react'
import { FaSquarePhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import Link from 'next/link';

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-red-900 to-red-950 text-white mt-10 px-6 py-14 rounded">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Contact Us */}
        <div className="space-y-2 text-lg">
          <Link href={"/Chat"}>
            <h4 className="text-lg font-bold mb-4 space-y-2 flex items-center gap-2">
            <IoMdContact size={20}/>
            Chat Support
            </h4>
          </Link>
          <p className="mb-2 flex items-start gap-2 font-bold hover:underline cursor-pointer space-y-2 text-sm">
          <IoLocation  size={33} />
        <span>N-Block, Zahoor Market, Model Town, Extension Scheme Block, Lahore</span>
        </p>
        <p className="text-sm mb-1 flex items-start gap-2 font-bold hover:underline cursor-pointer">
        <FaSquarePhone size={23} />
        <span>
            +92 309-4130285<br />
            +92 3334381858<br />
        </span>
        </p>
        <p className="text-sl flex items-center gap-2 font-bold hover:underline cursor-pointer">
        <MdOutlineMail size={25}/>
        <span>mzain.butt68@gmail.com
        </span>
        </p> 
        </div>

        {/* Our Links */}

    <div>
      <h4 className="text-lg font-semibold mb-4">🔗 Our Links</h4>
      <ul className="space-y-2 text-lg">
        <li className="flex items-center gap-2 hover:underline cursor-pointer ">
          <FcAbout size={23} /> About Us
        </li>
        <li className="flex items-center gap-2 hover:underline cursor-pointer ">
        <FaFacebookSquare size={22} />Facebook
        </li>
        <li className="flex items-center gap-2 hover:underline cursor-pointer">
        <FaSquareInstagram  size={23}/> Instagram
        </li>
        <li className="flex items-center gap-2 hover:underline cursor-pointer">
        <RiTeamFill  size={23}/>Team
        </li>
        
      </ul>
    </div>

    {/* Servecise*/}
    <div>
      <h4 className="text-lg font-semibold mb-4">🛠️ Our Services</h4>
      <ul className="space-y-2 text-sm font-semibold">
        <li className="flex items-center gap-2 cursor-pointer">
          Awesome Team
        </li>
        <li className="flex items-center gap-2 cursor-pointer">
            Service
        </li>
        <li className="flex items-center gap-2 cursor-pointer">
          Order Token
        </li>
        <li className="flex items-center gap-2 cursor-pointer">
          Quick Delivery
        </li>
        <li className="flex items-center gap-2 cursor-pointer">
        Fresh Healthy Food
        </li>
      </ul>
    </div>

    {/* Help Center*/}

        <div>
          <h4 className="text-lg font-semibold mb-4">❓ Help Center</h4>
          <ul className="space-y-2 text-sm font-semibold">
            <li className="hover:underline cursor-pointer">Service</li>
            <li className="hover:underline cursor-pointer">Service Detail</li>
            <li className="hover:underline cursor-pointer">Coming Soon</li>
            <li className="hover:underline cursor-pointer">Under Maintenance</li>
          </ul>
        </div>
        </div>

    <footer className="w-full-screen text-xs border-t border-b-gray-300 pt-4 flex justify-center items-center px-8 mt-7">
      <p className="text-gray-400">© 2025 All rights reserved.</p>
    </footer>
    </footer>
    )
}

export default Footer