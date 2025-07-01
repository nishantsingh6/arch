import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { allservices } from '../export';

const Services = () => {
  return (
     <section className="px-8 py-12 bg-gray-50" id='services'>
        <h2 className="text-yellow-700 font-semibold text-sm text-center mb-2">SERVICES WE DO</h2>
        <h1 className="text-4xl font-bold text-center mb-6">Expert Interior Solutions</h1>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: "🧭", title: "Residential Interiors" },
            { icon: "🏢", title: "Commercial Interiors" },
            { icon: "🛠️", title: "Renovation Services" },
            { icon: "🧰", title: "Custom Designs" }
          ].map(({ icon, title }) => (
            <div key={title} className="p-6 bg-white rounded shadow text-center">
              <div className="text-4xl mb-2">{icon}</div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-gray-600">Short description about {title.toLowerCase()}.</p>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Services;
