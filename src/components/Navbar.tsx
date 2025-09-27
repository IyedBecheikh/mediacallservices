"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/90 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Mediacall Services"
          width={150}
          height={50}
          priority
        />

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-gray-300">
          <li><a href="#hero" className="hover:text-yellow-500">Home</a></li>
          <li><a href="#it-services" className="hover:text-yellow-500">IT Services</a></li>
          <li><a href="#data-processing" className="hover:text-yellow-500">Data Processing</a></li>
          <li><a href="#web-development" className="hover:text-yellow-500">Web Development</a></li>
          <li><a href="#telecommunication" className="hover:text-yellow-500">Telecommunication</a></li>
          <li><a href="#voip" className="hover:text-yellow-500">VoIP</a></li>
        </ul>

        {/* Mobile button */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">
          <ul className="flex flex-col space-y-4 p-6 text-gray-300">
            <li><a href="#hero" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">Home</a></li>
            <li><a href="#it-services" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">IT Services</a></li>
            <li><a href="#data-processing" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">Data Processing</a></li>
            <li><a href="#web-development" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">Web Development</a></li>
            <li><a href="#telecommunication" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">Telecommunication</a></li>
            <li><a href="#voip" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">VoIP</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
