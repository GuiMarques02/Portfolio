import React from 'react';
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/gui.png";

const Hero = () => {
  const paragraphs = HERO_CONTENT.split('\n\n');

  return (
    <div className="border-b border-neutral-600 pb-4 lg:mb-35">
      <div className="flex flex-wrap mb-20">
        <div className="w-full lg:w-1/2">
          <div className="ml-8 flex flex-col items-center lg:items-start p-2 lg:pl-16">
            <h1 className="pb-12 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Guilherme Marques</h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-400 to-purple-500 bg-clip-text text-transparent text-4xl tracking-tight">
              FrontEnd Developer WannaBe
            </span>
            <div className="my-2 max-w-2xl py-6 font-light tracking-tighter">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-4 text-neutral-400">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={profilePic} alt="Guilherme Marques" className="rounded-[2.5rem] w-[450px] h-auto shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

