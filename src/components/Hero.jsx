import React from 'react';
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/gui.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration:0.5, delay: delay},
  }
})

const Hero = () => {
  const paragraphs = HERO_CONTENT.split('\n\n');

  return (
    <div className="pb-4 border-b border-neutral-600 lg:mb-35">
      <div className="flex flex-wrap mb-20">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center p-2 text-center lg:items-start lg:text-start lg:pl-24">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-12 text-6xl font-thin tracking-tight lg:mt-16 2xl:text-8xl">Guilherme Marques</motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-4xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-400 to-purple-500 bg-clip-text">
              FrontEnd Developer WannaBe
            </motion.span>
            <div className="max-w-4xl py-6 mx-5 my-2 font-light tracking-tighter sm:mx-0">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  variants={container(1)}
                  initial="hidden"
                  animate="visible"
                  key={index} className="mb-5 text-neutral-400">{paragraph}</motion.p>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center ">
            <motion.img 
            initial={{x:100, opacity: 0}} 
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay: 1.2}}
            src={profilePic} alt="Guilherme Marques" className=" rounded-[2.5rem] w-[300px] sm:w-[450px] h-auto shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

