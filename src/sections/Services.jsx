import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { allservices } from '../export';

const Services = () => {
  return (
    <div id="services" className="w-full bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] mx-auto py-[60px] flex flex-col items-center justify-center gap-6"
      >
        <h1 className="text-black uppercase text-[32px] md:text-[40px] font-bold text-center">
          Services We Offer
        </h1>

        <div className="w-[120px] h-[6px] bg-green-500"></div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
        >
          {allservices.map((item, index) => (
            <motion.div
              key={index}
              variants={zoomInVariants}
              className="flex flex-col items-center gap-6 p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white"
            >
              <img
                src={item.img} 
                alt={`${item.title} image`} 
                className="w-[200px] h-[200px] object-cover rounded-lg mb-4 hover:scale-105 transition-all duration-300"
              />
              <div className="flex flex-col gap-2 text-center">
                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                <p className="text-[16px] text-gray-700">{item.about}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
