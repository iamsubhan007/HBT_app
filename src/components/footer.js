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
        <footer className="bg-gray-300 shadow-lg text-gray-950 mt-10 px-6 py-14 rounded">
        <div className="max-w-7xl mx-auto flex gap-10">
        {/* Contact Us */}
        <div className="space-y-2 text-lg">
          <Link href={"/Chat"}>
            <h4 className="text-lg font-bold mb-4 space-y-2 flex items-center gap-2">
            <IoMdContact size={20}/>
            Chat Support
            </h4>
          </Link>
          <Link href={"https://maps.app.goo.gl/5XFAv67ZhpQVPdje6"}>
            <p className="mb-2 flex items-start gap-2 font-bold hover:underline cursor-pointer space-y-2 text-sm">
              <IoLocation  size={33} />
              <span>N-Block, Zahoor Market, Model Town, Extension Scheme Block, Lahore</span>
            </p>
          </Link>
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
        </div>

    
      <footer className="w-full-screen text-xs border-t border-b-gray-300 pt-4 flex justify-center items-center px-8 mt-7">
        <p className="text-gray-400">© 2025 All rights reserved.</p>
      </footer>
    </footer>
    )
}

export default Footer