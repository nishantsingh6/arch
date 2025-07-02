import React from 'react';
import { allservices } from '../export';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png'; 
const Quality = () => {
  return (
    <section className="px-6 md:px-12 py-12 bg-gray-50" id="services">
      {/* Header with Logo + Text from Image */}
      <div className="text-center mb-10 flex flex-col items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-16 h-16 mb-2"
        />
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
          Radhika Architectural Services
        </h1>
        <p className="text-sm sm:text-base italic text-gray-600 mt-1">
          Design with Purpose Build with Precision
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allservices.map(({ id, title, img }) => (
          <motion.div
            key={id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="w-full h-64 bg-white">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-contain p-4"
              />
            </div>

            {/* Title */}
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800 text-center">
                {title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Quality;

