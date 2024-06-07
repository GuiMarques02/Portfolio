import React from 'react';
import { PROJECTS } from "../constants";


const Projects = () => {
  return (
    <div className=" pb-24">
      <h2 className="my-20 mb-10 text-center text-4xl ">
        <span className="bg-gradient-to-r from-pink-400 via-slate-400 to-purple-500 bg-clip-text text-transparent text-4xl tracking-tight">
          Projects I pretended to do
        </span>
        </h2>
      <div className="flex flex-wrap justify-center">
        {PROJECTS.map((project, index) => (
          <div key={index} className="group m-8 relative w-[300px] h-[400px]">
            <img src={project.image} alt={project.title} className="project-image w-full h-full object-cover rounded-[50px]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-4 rounded-[50px]">
              <h3 className="text-[25px] font-bold mb-7 text-center text-[#8b6bff]">{project.title}</h3>
              <p className="text-center mb-5">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-3">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-icon rounded-[20px] bg-[#5932e6] px-4 py-2 text-sm font-medium text-white">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
