import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

// Your image imports...
import upidr from '../assets/upidr.webp';
import phdcci from '../assets/phdcc.jpg';
import Rajesh from '../assets/Rajesh.jpg';
import Dalmau from '../assets/Dalmau.jpg';
import oyo from '../assets/oyo_tI.avif';
import ornate from '../assets/ornate.avif';
import citrus from '../assets/citrus.png';
import lili from '../assets/proj9.jpg';
import kukud from '../assets/kukud.avif';
import jindal from '../assets/jindal.jpg';
import judge from '../assets/judge.jpg';
import Arvind from '../assets/Arvind.jpg';
import Gaurav from '../assets/Gaurav.jpg';
import Jitendra from '../assets/Jitendra.jpg';

const governmentProjects = [
  { image: upidr, title: 'UPIDR' },
  { image: phdcci, title: 'PHDCCI' },
];

const factoryProjects = [
  { image: Rajesh, title: 'Rajesh Factory' },
  { image: Dalmau, title: 'Dalmau Food Plant' },
];

const hotelProjects = [
  { image: citrus, title: 'CITRUS RESTAURANT & BANQUETS', address: 'Lucknow Uttar Pradesh' },
  { image: oyo, title: 'OYO TOWN HOUSE SECTOR C INDIRA NAGAR LUCKNOW' },
  { image: ornate, title: 'HOTEL ORNATE TELIBAGH LUCKNOW' },
  { image: lili, title: 'HOTEL LILI VILLAS' },
  { image: kukud, title: 'KUKUD RANGILA THE FAMILY RESTAURANT' },
];

const farmHouseProjects = [{ image: jindal, title: 'Jindal Farm House' }];

const residentialProjects = [
  { image: judge, title: 'HONORABLE JUDGE' },
  { image: Arvind, title: 'MR. ARVIND SINGH' },
  { image: Gaurav, title: 'MR. GAURAV ' },
  { image: Jitendra, title: 'MR. JITENDRA ' },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const renderProjectGrid = (projects) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {projects.map((project, idx) => (
        <motion.div
          key={idx}
          variants={zoomInVariants}
          className="bg-white border rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          onClick={() => handleImageClick(project.image)}
        >
          <div className="w-full h-[220px] bg-white flex items-center justify-center overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold text-black text-center">{project.title}</h3>
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
        <h2 className="text-2xl font-semibold mb-4">Government Projects</h2>
        {renderProjectGrid(governmentProjects)}
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={zoomInVariants} className="w-[90%] mx-auto pb-16">
        <h2 className="text-2xl font-semibold mb-4">Factory Projects</h2>
        {renderProjectGrid(factoryProjects)}
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={zoomInVariants} className="w-[90%] mx-auto pb-16">
        <h2 className="text-2xl font-semibold mb-4">Hotel Projects</h2>
        {renderProjectGrid(hotelProjects)}
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={zoomInVariants} className="w-[90%] mx-auto pb-16">
        <h2 className="text-2xl font-semibold mb-4">Farm House Projects</h2>
        {renderProjectGrid(farmHouseProjects)}
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={zoomInVariants} className="w-[90%] mx-auto pb-16">
        <h2 className="text-2xl font-semibold mb-4">Residential Projects</h2>
        {renderProjectGrid(residentialProjects)}
      </motion.div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-red-600 hover:text-white transition"
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Full View"
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
