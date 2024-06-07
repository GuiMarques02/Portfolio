import { RiReactjsLine } from "react-icons/ri";
import { RiHtml5Fill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { FaWindows } from "react-icons/fa";

const Technologies = () => {
  return <div className="border-b border-neutral-600 pb-24">
    <h2 className="my-20 text-center text-4xl"><span className="bg-gradient-to-r from-pink-400 via-slate-400 to-purple-500 bg-clip-text text-transparent text-4xl tracking-tight">What I pretend to know</span></h2>
    <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-700 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-700 p-4">
            <RiTailwindCssFill className="text-7xl text-cyan-300"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-700 p-4">
            <RiHtml5Fill className="text-7xl text-orange-500"/>
        </div>            
        <div className="rounded-2xl border-4 border-neutral-700 p-4">
              <FaCss3Alt className="text-7xl text-blue-600"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-700 p-4">
             <FaJava className="text-7xl text-cyan-700"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-700 p-4">
            <FaPython className="text-7xl text-yellow-500"/>
        </div>

        <div className="rounded-2xl border-4 border-neutral-700 p-4">
             <SiCanva className="text-7xl text-purple-600"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-700 p-4">
            <FaWindows className="text-7xl text-cyan-400"/>
        </div>
    </div>
  </div>
  
};

export default Technologies