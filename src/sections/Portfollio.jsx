import React from 'react';
import project1 from '../assets/proj1.jpg';
import project2 from '../assets/proj2.jpg';
import project3 from '../assets/proj3.jpg';
import project4 from '../assets/proj4.jpg';
import project5 from '../assets/proj5.jpg';
import project6 from '../assets/proj6.jpg';
import project7 from '../assets/proj7.jpg';
import project8 from '../assets/proj8.jpg';
import project9 from '../assets/proj9.jpg';
import project10 from '../assets/proj10.jpg';
import project11 from '../assets/proj11.jpg';
import project12 from '../assets/proj12.jpg';
import project13 from '../assets/proj13.jpg';
import project14 from '../assets/proj14.jpg';
import project15 from '../assets/proj15.jpg';
import project16 from '../assets/proj16.jpg';
import project17 from '../assets/proj17.jpg';
import project18 from '../assets/proj18.jpg';
import project19 from '../assets/proj19.jpg';
import project20 from '../assets/proj20.jpg'; 


import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const Portfolio = () => {
  const projects = [
    project1, project2, project3, project4,
    project5, project6, project7, project8,project9,project10,project11,project12,project13,project14,project15,project16,project17,project18,project19,project20
  ];

  return (
    <div className="w-full bg-black" id="projects">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] mx-auto py-[60px] flex flex-col items-center justify-center gap-6"
      >
        <h2 className="text-green-500 text-2xl font-semibold">PORTFOLIO</h2>

        <h1 className="text-white uppercase text-[32px] md:text-[40px] font-bold text-center">
          Our Best Projects
        </h1>

        <div className="w-[120px] h-[6px] bg-green-500" />
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-16"
      >
        {projects.map((img, index) => (
          <motion.div
            key={index}
            variants={zoomInVariants}
            className="w-full h-[250px] overflow-hidden rounded-md shadow-md"
          >
            <img
              src={img}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
