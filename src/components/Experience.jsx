import { EXPERIENCES } from "../constants";

const Experience = () => {
  const en = localStorage.getItem("lang") === "EN" ? true : false;
  return (
    <div className="pb-4 border-b border-neutral-600" >
      <h2 className="my-20 text-4xl text-center">
        <span className="text-3xl tracking-tight text-transparent bg-gradient-to-r from-pink-400 via-slate-400 to-purple-500 bg-clip-text sm:text-4xl">
          {en ? " My little to no work so far" : "O pouco que se fez até agora"}
        </span>
      </h2>
      <div className="mx-6 sm:mx-0">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="flex flex-wrap mb-16 sm:justify-center">
            <div className="w-full sm:w-1/4 ">
              <p className="mb-2 text-md text-neutral-400"> {experience.year} </p>
            </div>
            <div className="w-full max-w-xl sm:h-3/4">
              <h6 className="mb-2 font-semibold">
                {en ? experience.role : experience.cargo} -{" "}
                <span className="text-sm text-purple-200">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{en ? experience.description : experience.descricao}</p>
              <div className="flex flex-wrap ">
                {en ? (
                  experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 mt-3 px-3 py-1 sm:mr-2 sm:mt-3 sm:px-4 sm:py-2 text-sm font-medium rounded-[20px] bg-neutral-900 text-purple-400 hover:scale-110 hover:bg-purple-500 hover:bg-opacity-20 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))
                ) : (
                  experience.competencias.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 mt-3 px-3 py-1 sm:mr-2 sm:mt-3 sm:px-4 sm:py-2 text-sm font-medium rounded-[20px] bg-neutral-900 text-purple-400 hover:scale-110 hover:bg-purple-500 hover:bg-opacity-20 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
