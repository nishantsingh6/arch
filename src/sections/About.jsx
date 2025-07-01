import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import aboutImage from '../assets/kitchen.jpg'; // replace with correct path

const About = () => {
  const [showFullText, setShowFullText] = useState(false);
  const handleToggle = () => setShowFullText(prev => !prev);

  const fullText = `Raadhika Architectural Services specializes in creating stylish, functional, and innovative interior designs for residential and commercial spaces. We are committed to delivering quality, safety, and exceptional craftsmanship in every project, ensuring client satisfaction worldwide. With years of experience in the design industry, we understand the importance of both aesthetics and functionality. Our team works closely with each client to bring their vision to life, creating environments that are both beautiful and practical.
At Raadhika Architectural Services, we believe that every space has the potential to tell a unique story. Our designs are driven by the principles of creativity, functionality, and sustainability. We pay close attention to every detail, from layout to lighting, ensuring the final result is an inspiring, comfortable, and efficient environment that reflects our client's needs and personality.`;

  const previewText = fullText.slice(0, 450) + '...';

  return (
    <section id="about" className="w-full">
      {/* Top Section (Image + Intro Text) */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 py-12 bg-white">
        <img
          src={aboutImage}
          alt="Interior"
          className="w-full lg:w-1/2 rounded shadow-md"
        />
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
          <h2 className="text-yellow-700 font-semibold text-sm mb-2 uppercase">
            About Raadhika Architectural Services
          </h2>
          <h1 className="text-4xl font-bold leading-tight mb-4 text-gray-900">
            Transforming Spaces with Style and Elegance
          </h1>
          <p className="mb-4 text-gray-600">
           {showFullText ? fullText : previewText}
          </p>
          <button className="bg-yellow-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-yellow-700 transition duration-300" onClick={handleToggle}>
             {showFullText ? 'SHOW LESS' : 'SHOW MORE'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
