// components/Navbar.js
// components/Navbar.js
// components/Navbar.js
"use client";
import { motion } from 'framer-motion';
import { FaHome, FaInfoCircle, FaCalendarAlt, FaBlog, FaEnvelope } from 'react-icons/fa'; // Import icons
import react from 'react';
export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[#E6E6FA] via-[#D8BFD8] to-[#C8A2C8] shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A2BE2] to-[#6A5ACD]">
          <a href="/" className="text-3xl font-extrabold">
            Women in Tech
          </a>
        </div>

        {/* Links for desktop */}
        <div className="hidden md:flex space-x-8">
          {[
            { name: 'Home', icon: <FaHome /> },
            { name: 'About Us', icon: <FaInfoCircle /> },
            { name: 'Events', icon: <FaCalendarAlt /> },
            { name: 'Blog', icon: <FaBlog /> },
            { name: 'Contact', icon: <FaEnvelope /> }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.name === 'Home' ? '/' : `/${item.name.toLowerCase().replace(' ', '')}`}
              className="flex items-center font-bold text-white text-xl hover:text-[#D8BFD8] transition duration-200" // Increased font size
              whileHover={{ scale: 1.1, y: -2, color: '#D8BFD8' }} // Hover animation
              whileTap={{ scale: 0.95, y: 0 }} // Tap animation
              transition={{ type: "spring", stiffness: 300, duration: 0.2 }} // Faster animation
            >
              <span className="mr-2">{item.icon}</span> {/* Icon */}
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-white hover:text-[#F5F5F5] focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
