import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const About = () => {
  return (
    <div
      id="about"
      className="lg:w-[80%] w-[90%] mx-auto py-[60px] flex flex-col lg:flex-row justify-between items-start gap-[50px]"
    >
      {/* Left Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[60%] w-full flex flex-col items-start justify-center gap-6"
      >
        <h2 className="text-green-500 text-2xl font-semibold">
          Welcome To
        </h2>

        <h1 className="text-white uppercase text-[32px] md:text-[40px] font-bold leading-tight">
          Architect Website
        </h1>

        <div className="w-[120px] h-[6px] bg-green-500"></div>

        <p className="text-2xl italic text-gray-50 mt-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, quidem!
        </p>
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[40%] w-full flex flex-col items-start justify-center gap-6"
      >
        <p className="text-white text-base md:text-lg text-justify leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fuga perspiciatis
          blanditiis soluta possimus tempore a dignissimos cupiditate natus necessitatibus,
          voluptas voluptatem. Omnis mollitia temporibus earum reiciendis dolores similique
          repellat atque non debitis, consequuntur odio harum porro adipisci iusto quas eum?
          Sequi exercitationem quidem veniam. Inventore iste consectetur, blanditiis quo
          aliquam nisi ipsa perspiciatis soluta labore laboriosam. Error, modi. Officiis
          temporibus tenetur numquam, impedit sunt hic ex debitis cumque accusamus quasi
          reiciendis facere distinctio velit architecto voluptatum consectetur optio incidunt
          quos ipsam nulla id placeat quisquam. Quis cumque mollitia quibusdam provident
          distinctio inventore debitis, impedit, similique, eius vero eos assumenda.
        </p>

        <motion.button
          variants={zoomInVariants}
          className="bg-green-500 hover:bg-white hover:text-black px-8 py-3 rounded-lg text-black font-bold transition-all duration-300"
        >
          READ MORE
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
