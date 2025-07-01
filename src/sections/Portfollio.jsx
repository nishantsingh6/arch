import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

import upidr from '../assets/upidr.webp';
import phdcci from '../assets/phdcci.jpg';
import ornate from '../assets/ornate.avif';
import Rajesh from '../assets/Rajesh.avif';
import oyo from '../assets/oyo_tI.avif';
import project3 from '../assets/proj3.jpg';
import project4 from '../assets/proj4.jpg';
import project7 from '../assets/proj7.jpg';
import project8 from '../assets/proj8.jpg';
import project9 from '../assets/proj9.jpg';
import project11 from '../assets/proj11.jpg';
import project12 from '../assets/proj12.jpg';

const governmentProjects = [
  { image: upidr, title: 'UPIDR', description: 'Planning and design for Uttar Pradesh Industrial Development.' },
  { image: phdcci, title: 'PHDCCI', description: 'Modern chamber renovation for smart workspace design.' },
  { image: project3, title: 'District Hospital', description: 'Expansion of district medical facilities.' },
];

const hotelProjects = [
  { image: project4, title: 'Luxury Resort', description: 'A modern luxury resort with eco-friendly designs.' },
  { image: oyo, title: 'Green Hotel', description: 'Hotel constructed with sustainable materials.' },
  { image: ornate, title: 'Boutique Hotel', description: 'Chic boutique hotel with premium comfort.' },
];

const residentialProjects = [
  { image: project7, title: 'Modern Home', description: 'Stylish family home with smart layouts.' },
  { image: project8, title: 'City Condos', description: 'Luxury condos with skyline views.' },
  { image: project9, title: 'Green Living', description: 'Eco-homes focused on energy efficiency.' },
];

const factoryProjects = [
  { image: Rajesh, title: 'Auto Factory', description: 'Expansion for automotive production.' },
  { image: project11, title: 'Food Plant', description: 'Automated hygienic food production unit.' },
  { image: project12, title: 'Textile Factory', description: 'Sustainable textile manufacturing unit.' },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const renderProjectGrid = (projects) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          variants={zoomInVariants}
          className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          onClick={() => handleImageClick(project.image)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[200px] object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
            <p className="text-gray-700 text-sm">{project.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-white text-black" id="projects">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] mx-auto py-[60px] flex flex-col items-center justify-center gap-6"
      >
        <h2 className="text-yellow-600 text-2xl font-semibold">PORTFOLIO</h2>
        <h1 className="text-black uppercase text-[32px] md:text-[40px] font-bold text-center">
          Our Past Experiences
        </h1>
        <div className="w-[120px] h-[6px] bg-yellow-700" />
      </motion.div>

      {/* Sections */}
      <motion.div initial="hidden" whileInView="visible" variants={zoomInVariants} className="w-[90%] mx-auto pb-16">
        <h2 className="text-black text-2xl font-semibold mb-4">Government Projects</h2>
        {renderProjectGrid(governmentProjects)}
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={zoomInVariants} className="w-[90%] mx-auto pb-16">
        <h2 className="text-black text-2xl font-semibold mb-4">Hotel Projects</h2>
        {renderProjectGrid(hotelProjects)}
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={zoomInVariants} className="w-[90%] mx-auto pb-16">
        <h2 className="text-black text-2xl font-semibold mb-4">Residential Projects</h2>
        {renderProjectGrid(residentialProjects)}
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={zoomInVariants} className="w-[90%] mx-auto pb-16">
        <h2 className="text-black text-2xl font-semibold mb-4">Factory Projects</h2>
        {renderProjectGrid(factoryProjects)}
      </motion.div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div className="relative max-w-[90%] max-h-[90%]">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-[-20px] right-[-20px] bg-white text-black rounded-full p-2 text-xl shadow-lg hover:bg-red-500 hover:text-white transition-all"
              aria-label="Close"
            >
              &times;
            </button>

            <img
              src={selectedImage}
              alt="Full View"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
