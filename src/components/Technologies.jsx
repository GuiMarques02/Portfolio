import { RiReactjsLine } from "react-icons/ri";
import { RiHtml5Fill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiFramer } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Technologies = () => {
    return <div className="pb-24 border-b border-neutral-600">
        <h2 className="my-20 text-center"><span className="text-3xl tracking-tight text-transparent sm:text-4xl bg-gradient-to-r from-pink-400 via-slate-400 to-purple-500 bg-clip-text">What I pretend to know</span></h2>
        <div className="flex flex-wrap items-center justify-center gap-8 mx-5">

            <div className="relative p-4 transition-all duration-100 ease-in-out border-4 group rounded-2xl border-neutral-700 hover:scale-110 hover:bg-cyan-900 hover:bg-opacity-40">
                <RiReactjsLine className="text-7xl text-cyan-400 group-hover:text-cyan-400" />
            </div>
            <div className="p-4 transition-all duration-100 ease-in-out border-4 rounded-2xl border-neutral-700 hover:scale-110 group hover:bg-cyan-900 hover:bg-opacity-40">
                <RiTailwindCssFill className="text-7xl text-cyan-300 group-hover:text-cyan-300" />
            </div>
            <div className="p-4 transition-all duration-100 ease-in-out border-4 rounded-2xl border-neutral-700 hover:scale-110 group hover:bg-orange-900 hover:bg-opacity-30">
                <RiHtml5Fill className="text-orange-500 text-7xl group-hover:text-orange-500" />
            </div>
            <div className="p-4 transition-all duration-100 ease-in-out border-4 rounded-2xl border-neutral-700 hover:scale-110 group hover:bg-blue-900 hover:bg-opacity-30">
                <FaCss3Alt className="text-blue-600 text-7xl group-hover:text-blue-600" />
            </div>
            <div className="p-4 transition-all duration-100 ease-in-out border-4 rounded-2xl border-neutral-700 hover:scale-110 group hover:bg-cyan-900 hover:bg-opacity-30" >
                <FaJava className="text-7xl text-cyan-700 group-hover:text-cyan-700" />
            </div>
            <div className="p-4 transition-all duration-100 ease-in-out border-4 rounded-2xl border-neutral-700 hover:scale-110 group hover:bg-yellow-400 hover:bg-opacity-10">
                <FaPython className="text-yellow-500 text-7xl group-hover:text-yellow-500" />
            </div>
            <div className="p-4 transition-all duration-100 ease-in-out border-4 rounded-2xl border-neutral-700 hover:scale-110 group hover:bg-purple-700 hover:bg-opacity-20">
                <SiCanva className="text-purple-600 text-7xl group-hover:text-purple-600" />
            </div>
            <div className="p-4 transition-all duration-100 ease-in-out border-4 rounded-2xl border-neutral-700 hover:scale-110 group hover:bg-yellow-400 hover:bg-opacity-10">
                <IoLogoJavascript className="text-yellow-400 text-7xl group-hover:text-yellow-400" />
            </div>
            <div className="p-4 transition-all duration-100 ease-in-out border-4 rounded-2xl border-neutral-700 hover:scale-110 group hover:bg-pink-500 hover:bg-opacity-15">
                <SiFramer  className="text-pink-600 text-7xl group-hover:text-pink-600" />
            </div>
            <div className="p-4 transition-all duration-100 ease-in-out border-4 rounded-2xl border-neutral-700 hover:scale-110 group hover:bg-cyan-900 hover:bg-opacity-30" >
                <GrMysql className="text-7xl text-cyan-600 group-hover:text-cyan-600" />
            </div>
        </div>
    </div>

};

export default Technologies