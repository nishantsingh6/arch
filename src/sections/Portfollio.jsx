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

  const hotelProjects = [
    { image: project4, title: "Luxury Hotel Resort", description: "A luxurious resort offering top-notch services, stunning views, and premium amenities for a world-class stay." },
    { image: project5, title: "Eco-Friendly Hotel", description: "A hotel built with sustainable materials, integrating green technologies for an eco-conscious guest experience." },
    { image: project6, title: "Boutique Hotel", description: "A stylish boutique hotel that emphasizes comfort and personalized experiences with a modern design." },
  ];

  const residentialProjects = [
    { image: project7, title: "Modern Family Home", description: "A contemporary residential design focused on family comfort, energy efficiency, and aesthetic appeal." },
    { image: project8, title: "Urban Luxury Condos", description: "Luxury condo units designed to provide city living with premium amenities and a stunning view." },
    { image: project9, title: "Eco-Friendly Housing", description: "A residential development that focuses on sustainable living with energy-efficient features and green architecture." },
  ];

  const factoryProjects = [
    { image: project10, title: "Automobile Factory Expansion", description: "Expanding an existing automobile factory to accommodate new production lines and cutting-edge manufacturing technology." },
    { image: project11, title: "Food Processing Plant", description: "Designing a modern food processing facility with a focus on hygiene, automation, and sustainability." },
    { image: project12, title: "Textile Manufacturing Facility", description: "Building a textile factory with state-of-the-art machinery to streamline production and reduce waste." },
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

      {/* Hotel Projects Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="w-[90%] mx-auto pb-16"
      >
        <h2 className="text-white text-2xl font-semibold mb-4">Hotel Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {hotelProjects.map((project, index) => (
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

      {/* Residential Projects Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="w-[90%] mx-auto pb-16"
      >
        <h2 className="text-white text-2xl font-semibold mb-4">Residential Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {residentialProjects.map((project, index) => (
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

      {/* Factory Projects Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="w-[90%] mx-auto pb-16"
      >
        <h2 className="text-white text-2xl font-semibold mb-4">Factory Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {factoryProjects.map((project, index) => (
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
