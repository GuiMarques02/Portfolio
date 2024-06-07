import React from 'react';
import aboutImg from "../assets/aboutMe.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  const paragraphs = ABOUT_TEXT.split('\n\n');

  return (
    <div className="border-b border-neutral-600 pb-24">
      <h2 className="my-20 text-center text-4xl">
        <span className="bg-gradient-to-r from-pink-400 via-slate-400 to-purple-500 bg-clip-text text-transparent text-4xl tracking-tight">
          About Me, Myself & I
        </span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className='flex items-center justify-center'>
            <img className="rounded-[2.5rem] w-[550px] h-auto shadow-2xl" src={aboutImg} alt="logo_white" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <div className="my-2 max-w-xl py-6">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-4 text-neutral-400">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
