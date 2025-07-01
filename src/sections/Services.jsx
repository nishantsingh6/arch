import React from 'react';


const Services = () => {
  return (
     <section className="px-8 py-12 bg-gray-50" id='services'>
        <h2 className="text-yellow-700 font-semibold text-sm text-center mb-2">SERVICES WE DO</h2>
        <h1 className="text-4xl font-bold text-center mb-6">Expert Interior Solutions</h1>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: "🧭", title: "Residential Interiors", description: "Transform your home into a cozy and stylish living space with our tailored residential interior design services." },
            { icon: "🏢", title: "Commercial Interiors", description: "Maximize productivity and aesthetic appeal in your workplace with our commercial interior design solutions." },
            { icon: "🛠️", title: "Renovation Services", description: "Give your space a fresh look with our comprehensive renovation services, combining modern designs with functionality." },
            { icon: "🧰", title: "Custom Designs", description: "We specialize in creating bespoke interior designs tailored to your needs, reflecting your unique style and vision." }
          ].map(({ icon, title, description }) => (
            <div key={title} className="p-6 bg-white rounded shadow text-center">
              <div className="text-4xl mb-2">{icon}</div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Services;
