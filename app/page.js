// pages/index.js
// pages/index.js
"use client";
// pages/index.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const topics = [
  {
    title: 'Workshops & Events',
    description: 'Join our workshops on various tech topics.',
    image: '/images/workshop1.gif', // Use a high-quality image
  },
  {
    title: 'Networking',
    description: 'Connect with like-minded individuals.',
    image: '/images/networking.gif', // Use a high-quality image
  },
  {
    title: 'Mentorship',
    description: 'Get guidance from industry professionals.',
    image: '/images/mentorship.gif', // Use a high-quality image
  },
  {
    title: 'Career Development',
    description: 'Resources for enhancing your career in tech.',
    image: '/images/career-development.gif', // Use a high-quality image
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F4FF]">
      <Navbar />

      <header className="bg-gradient-to-r from-[#6A5ACD] to-[#B0A6E5] text-white text-center py-20">
        {/* Animated Header Text */}
        <motion.h1
          className="text-5xl font-extrabold drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Women in Tech Society
        </motion.h1>
        <p className="text-lg mt-4 drop-shadow-md max-w-xl mx-auto">
          Empowering women in technology through community, collaboration, and mentorship.
        </p>
        <button className="bg-white text-[#6A5ACD] font-semibold py-3 px-6 rounded-lg hover:bg-[#E8E8E8] transition duration-300 mt-4">
          Join Us
        </button>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger the animation
            >
              <img src={topic.image} alt={topic.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#6A5ACD] mb-2">{topic.title}</h3>
                <p className="text-gray-600">{topic.description}</p>
              </div>
            </motion.div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#6A5ACD]">About Us</h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            We are dedicated to empowering women in technology through various initiatives including workshops, mentorship programs, and networking events.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#6A5ACD]">Upcoming Events</h2>
          <ul className="list-disc list-inside text-lg text-center">
            <li>Workshop on AI in Tech - October 15, 2024</li>
            <li>Networking Event - October 22, 2024</li>
            <li>Mentorship Session - October 29, 2024</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
