import React, { useState } from 'react';
import heroimg from '../assets/heroimg.png';
import backgroundImage from '../assets/homeimg.webp';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const description = `
    At Raadhika Architectural, we specialize in creating spaces that reflect your vision and needs. Whether you’re looking to renovate your flat, design a custom modular kitchen, or build something entirely new, our expert team is here to deliver exceptional results. From interior & exterior design to painting and putty work, we focus on every detail to ensure your space feels like home.
    Our services also include specialized aluminium, steel, MS, and glass work for added durability and modern appeal. Whether you're remodeling an existing space or starting a new project from the ground up, we offer complete construction solutions that are both functional and aesthetically pleasing.
    Let’s build something extraordinary together!
  `;

  const truncatedDescription = description.slice(0, 250) + "...";

  return (
    <div
      id="hero"
      className="w-full bg-black bg-cover bg-center lg:h-[700px] pt-[60px] lg:pt-0 flex flex-col lg:flex-row justify-between items-center gap-[50px] px-6"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Text Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[60%] w-full flex flex-col items-start justify-center gap-6"
      >
        <h2 className="text-green-500 text-2xl font-semibold">
          Raadhika Architectural
        </h2>

        <h1 className="text-white uppercase text-[40px] md:text-[50px] font-bold leading-tight">
          We Build Your Dreams
        </h1>

        <div className="w-[120px] h-[6px] bg-green-500"></div>

        <p className="text-white text-lg md:text-xl max-w-xl">
          {isExpanded ? description : truncatedDescription}
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="flex flex-wrap gap-4 mt-4"
        >
          <motion.button
            variants={zoomInVariants}
            className="bg-green-500 hover:bg-white hover:text-black text-black px-8 py-3 rounded-lg font-bold transition-all duration-300"
            onClick={handleReadMore}
          >
            {isExpanded ? 'SHOW LESS' : 'READ MORE'}
          </motion.button>

          <motion.button
            variants={zoomInVariants}
            className="border-2 border-white hover:border-green-500 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300"
          >
            Reach Us
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="lg:w-[40%] w-full flex justify-center items-center"
      >
        <img
          src={heroimg}
          alt="Architectural Visual"
          className="lg:h-[600px] h-[300px] object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
