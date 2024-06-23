import React from 'react';
import aboutImg from "../assets/aboutMe.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  const paragraphs = ABOUT_TEXT.split('\n\n');

  return (
    <div className="pb-20 border-b border-neutral-600">
      <h2 className="my-20 text-4xl text-center">
        <span className="text-3xl tracking-tight text-transparent sm:text-4xl bg-gradient-to-r from-pink-400 via-slate-400 to-purple-500 bg-clip-text">
          About Me, Myself & I
        </span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity:1, x: 0}}
        initial={{x:-100, opacity: 0}} 
        animate={{x:0, opacity:1}}
        transition={{duration:1}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className='flex items-center justify-center'>
            <img className="rounded-[2.5rem] w-[300px] sm:w-[450px] h-auto shadow-2xl" src={aboutImg} alt="logo_white" />
          </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1, x: 0}}
        initial={{x:100, opacity: 0}} 
        animate={{x:0, opacity:1}}
        transition={{duration:1}}
        className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <div className="max-w-3xl mx-5 my-2 font-light tracking-tighter pt-9 sm:mx-0">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-4 text-neutral-400">{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.div >
      </div>
    </div>
  );
}

export default About;
