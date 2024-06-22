import { RiReactjsLine } from "react-icons/ri";
import { RiHtml5Fill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const Technologies = () => {
  return <div className="pb-24 border-b border-neutral-600">
    <h2 className="my-20 text-center"><span className="text-3xl tracking-tight text-transparent sm:text-4xl bg-gradient-to-r from-pink-400 via-slate-400 to-purple-500 bg-clip-text">What I pretend to know</span></h2>
    <div className="flex flex-wrap items-center justify-center gap-6">
        <div className="p-4 border-4 rounded-2xl border-neutral-700">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-700">
            <RiTailwindCssFill className="text-7xl text-cyan-300"/>
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-700">
            <RiHtml5Fill className="text-orange-500 text-7xl"/>
        </div>            
        <div className="p-4 border-4 rounded-2xl border-neutral-700">
              <FaCss3Alt className="text-blue-600 text-7xl"/>
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-700">
             <FaJava className="text-7xl text-cyan-700"/>
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-700">
            <FaPython className="text-yellow-500 text-7xl"/>
        </div>

        <div className="p-4 border-4 rounded-2xl border-neutral-700">
             <SiCanva className="text-purple-600 text-7xl"/>
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-700">
            <IoLogoJavascript className="text-yellow-400 text-7xl"/>
        </div>
    </div>
  </div>
  
};

export default Technologies