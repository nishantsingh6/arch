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
  const governmentProjects = [
    { image: project1, title: "Smart City Development", description: "A government initiative to develop sustainable smart cities, integrating technology for better urban living." },
    { image: project2, title: "Public Healthcare Infrastructure", description: "Improving healthcare facilities across rural areas, aiming to provide better health services to underserved populations." },
    { image: project3, title: "National Roadways Expansion", description: "The construction and expansion of national roadways to facilitate faster and safer transportation for citizens." },
  ];

  const privateProjects = [
    { image: project4, title: "Luxury Apartment Complex", description: "A luxury residential project featuring modern amenities and green spaces in the heart of the city." },
    { image: project5, title: "Corporate Office Tower", description: "A high-end office space designed for a global corporation, focused on sustainability and energy efficiency." },
    { image: project6, title: "Retail Store Design", description: "A flagship retail store for a luxury brand, combining high-end design with functional retail experience." },
  ];

  const otherProjects = [
    { image: project7, title: "Community Park Revitalization", description: "A project to transform an underused park into a vibrant community space with playgrounds, gardens, and seating areas." },
    { image: project8, title: "Artist Portfolio Website", description: "A personal website for a renowned local artist, showcasing their portfolio with a minimalist design." },
    { image: project9, title: "E-Learning Platform for Non-Profits", description: "A platform designed to help non-profits offer online learning programs to underserved communities." },
    { image: project10, title: "Sustainable Urban Farming", description: "An urban farming initiative that focuses on growing organic produce in city spaces, helping reduce food deserts." },
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

      {/* Government Projects Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="w-[90%] mx-auto pb-16"
      >
        <h2 className="text-white text-2xl font-semibold mb-4">Government Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {governmentProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={zoomInVariants}
              className="relative w-full h-[300px] overflow-hidden rounded-md shadow-md"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Private Projects Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="w-[90%] mx-auto pb-16"
      >
        <h2 className="text-white text-2xl font-semibold mb-4">Hotels & Resedency Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {privateProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={zoomInVariants}
              className="relative w-full h-[300px] overflow-hidden rounded-md shadow-md"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Other Projects Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="w-[90%] mx-auto pb-16"
      >
        <h2 className="text-white text-2xl font-semibold mb-4">Other Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={zoomInVariants}
              className="relative w-full h-[300px] overflow-hidden rounded-md shadow-md"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
