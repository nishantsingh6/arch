import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const About = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleToggle = () => setShowFullText(prev => !prev);

  const fullText = `Raadhika Architectural Services specializes in creating stylish, functional, and innovative interior designs for residential and commercial spaces. We are committed to delivering quality, safety, and exceptional craftsmanship in every project, ensuring client satisfaction worldwide. With years of experience in the design industry, we understand the importance of both aesthetics and functionality. Our team works closely with each client to bring their vision to life, creating environments that are both beautiful and practical.
At Raadhika Architectural Services, we believe that every space has the potential to tell a unique story. Our designs are driven by the principles of creativity, functionality, and sustainability. We pay close attention to every detail, from layout to lighting, ensuring the final result is an inspiring, comfortable, and efficient environment that reflects our client's needs and personality.`;

  const previewText = fullText.slice(0, 450) + '...';

  return (
    <div
      id="about"
      className="lg:w-[80%] w-[90%] mx-auto py-[60px] flex flex-col lg:flex-row justify-between items-start gap-[50px]"
    >
      {/* Left Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[60%] w-full flex flex-col items-start justify-center gap-6"
      >
        <h2 className="text-green-500 text-2xl font-semibold">About Us</h2>

        <h1 className="text-white uppercase text-[32px] md:text-[40px] font-bold leading-tight">
          Raadhika Architectural Services
        </h1>

        <div className="w-[120px] h-[6px] bg-green-500"></div>

        <p className="text-2xl italic text-gray-50 mt-6">
          Raadhika Architectural Services blends creativity and functionality to design spaces that inspire and perform. Whether residential or commercial, our interiors are a reflection of purpose, elegance, and innovation.
        </p>
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[40%] w-full flex flex-col items-start justify-center gap-6"
      >
        <p className="text-white text-base md:text-lg text-justify leading-relaxed">
          {showFullText ? fullText : previewText}
        </p>

        <motion.button
          variants={zoomInVariants}
          onClick={handleToggle}
          className="bg-green-500 hover:bg-white hover:text-black px-8 py-3 rounded-lg text-black font-bold transition-all duration-300"
        >
          {showFullText ? 'SHOW LESS' : 'SHOW MORE'}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
