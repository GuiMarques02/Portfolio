import React from 'react';
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/gui.png";

const Hero = () => {
  const paragraphs = HERO_CONTENT.split('\n\n');

  return (
    <div className="pb-4 border-b border-neutral-600 lg:mb-35">
      <div className="flex flex-wrap mb-20">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center p-2 text-center lg:items-start lg:text-start lg:pl-24">
            <h1 className="pb-12 text-6xl font-thin tracking-tight lg:mt-16 2xl:text-8xl">Guilherme Marques</h1>
            <span className="text-4xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-400 to-purple-500 bg-clip-text">
              FrontEnd Developer WannaBe
            </span>
            <div className="max-w-4xl py-6 mx-5 my-2 font-light tracking-tighter sm:mx-0">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-5 text-neutral-400">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={profilePic} alt="Guilherme Marques" className="rounded-[2.5rem] w-[300px] sm:w-[450px] h-auto shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

