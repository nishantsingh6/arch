import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const Contact = () => {
  return (
    <div id="contact" className="bg-white w-full">
      <div className="lg:w-[80%] w-[90%] mx-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]">

        {/* Left Side – Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[60%] w-full flex flex-col items-start justify-center gap-6"
        >
          <h2 className="text-yellow-700 text-2xl font-semibold">CONTACT US</h2>

          <h1 className="text-black uppercase text-[32px] md:text-[40px] font-bold">
            Reach Us For Any Query
          </h1>

          <div className="w-[120px] h-[6px] bg-yellow-700" />

          <p className="text-xl italic text-gray-600 mt-10">
            Have a project in mind? Let’s build something together. Reach out and we'll get back to you quickly.
          </p>
        </motion.div>

        {/* Right Side – Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="lg:w-[40%] w-full"
        >
          <form className="flex flex-col gap-4 w-full">
            <input
              type="text"
              placeholder="Enter Your Full Name"
              aria-label="Full Name"
              required
              className="px-6 py-3 border-2 border-black text-black rounded-lg w-full focus:outline-yellow-700"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              aria-label="Email"
              required
              className="px-6 py-3 border-2 border-black text-black rounded-lg w-full focus:outline-yellow-700"
            />
            <input
              type="tel"
              placeholder="Enter Your Mobile Number"
              aria-label="Phone Number"
              required
              className="px-6 py-3 border-2 border-black text-black rounded-lg w-full focus:outline-yellow-700"
            />
            <textarea
              placeholder="Enter Your Message"
              aria-label="Message"
              required
              rows="4"
              className="px-6 py-3 border-2 border-black text-black rounded-lg w-full focus:outline-yellow-700"
            />
            <motion.button
              type="submit"
              variants={zoomInVariants}
              className="bg-yellow-700 hover:bg-black hover:text-white px-10 py-4 rounded-lg text-black font-bold transition-all duration-300 w-full"
            >
              SUBMIT
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
