import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { planning } from '../export';

const Working = () => {
  return (
    <div id="services" className="w-full bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] mx-auto py-[60px] flex flex-col items-center justify-center gap-6"
      >
        {/* Section Header */}
        <h2 className="text-green-500 text-2xl font-semibold">STEP BY STEP</h2>

        <h1 className="text-black uppercase text-[32px] md:text-[40px] font-bold text-center">
          How It's Working
        </h1>

        <div className="w-[120px] h-[6px] bg-green-500" />

        {/* Step Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
        >
          {planning.map((item, index) => (
            <motion.div
              key={index}
              variants={zoomInVariants}
              className="flex flex-col items-center text-center gap-4 border-2 border-green-500 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <item.icon className="w-20 h-20 bg-green-500 hover:bg-black hover:fill-white p-4 rounded-full transition-all duration-300 cursor-pointer" />
              </div>

              <h3 className="text-xl font-bold uppercase text-black">
                {item.title}
              </h3>

              <p className="text-gray-600 text-base">
                {item.about}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Working;
