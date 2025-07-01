import React from 'react';
//import { useNavigate } from 'react-router-dom';
import { allservices } from '../export';
import { Plus } from 'lucide-react'; // or use your own Add icon
import { motion } from 'framer-motion';

const Quality = () => {
 // const navigate = useNavigate();

  return (
    <section className="px-6 md:px-12 py-12 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-yellow-700 font-semibold text-sm">Our Services Quality</h2>
        <h1 className="text-4xl font-bold">Explore Our Services Range</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {allservices.map(({ id, title, img }) => (
          <motion.div
            key={id}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
          >
            <img
              src={img}
              alt={title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h3 className="font-semibold text-lg mb-3">{title}</h3>
              <button
                // onClick={() => navigate(`/services/${id}`)}
                className="flex items-center justify-center bg-yellow-600 text-white w-10 h-10 rounded-full self-end hover:bg-yellow-700 transition"
                title="View More"
              >
                <Plus size={20} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Quality;
