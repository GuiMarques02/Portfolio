import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-600 pb-4" >
      <h2 className="my-20 text-center text-4xl">
        <span className="bg-gradient-to-r from-pink-400 via-slate-400 to-purple-500 bg-clip-text text-transparent text-4xl tracking-tight">
          My little to no work so far
        </span>
      </h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-16 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-md text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:h-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "} 
                <span className="text-sm text-purple-200">
                    {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="mr-2 mt-4 rounded-[20px] bg-neutral-900 px-4 py-2 text-sm font-medium text-purple-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
