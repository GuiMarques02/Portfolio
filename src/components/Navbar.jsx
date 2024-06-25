import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';
import logo from "../assets/GLM_small_white_logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function changeLang(lang) {
    localStorage.setItem('lang', lang);
    window.location.reload();
  }

  return (
    <nav className="flex items-center justify-between py-10 mb-3 sm:mb-20">
      <div className="flex items-center flex-shrink-0">
        <img className="w-16 transition-all duration-200 ease-in-out cursor-pointer mx-7 lg:ml-16 sm:w-20 hover:scale-110" src={logo} alt="logo" />
      </div>
      <div className="items-center justify-center hidden gap-6 text-3xl text-white sm:flex mx-7 sm:mx-16 sm:gap-12 sm:text-4xl">
        <div className="flex gap-3 mr-2 sm:text-lg text-[15px]"> 
          <button className="active:text-[#5932e6] cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" onClick={() => changeLang("EN")}> EN </button>
          |
          <button className="active:text-[#5932e6] cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" onClick={() => changeLang("PT")}> PT </button>
        </div>
        <a className="hover:text-[#5932e6] cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" href="https://github.com/GuiMarques02" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a className="hover:text-[#5932e6] cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" href="https://www.linkedin.com/in/guilhermemarques02/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a className="hover:text-[#5932e6] cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" href="https://www.instagram.com/gui_lampreia/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a className="hover:text-[#5932e6] cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" href="https://x.com/gui_lampreia" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
      
      <div className="flex items-center mr-10 sm:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl text-white focus:outline-none">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-75">
          <button onClick={() => setIsMenuOpen(false)} className="absolute text-3xl text-white top-[60px] right-10 focus:outline-none">
            <FaTimes />
          </button>
          <div className="flex flex-col items-center text-5xl text-white gap-11">
            <div className='mb-10 text-3xl'>
            <button className="active:text-[#5932e6] mr-5 transition-all duration-200 ease-in-out cursor-pointer active:scale-110" onClick={() => changeLang("EN")}>EN</button>
            |
            <button className="active:text-[#5932e6] ml-5 transition-all duration-200 ease-in-out cursor-pointer active:scale-110" onClick={() => changeLang("PT")}>PT</button>
            </div>
            <a className="active:text-[#5932e6] cursor-pointer transition-all duration-200 ease-in-out active:scale-110" href="https://github.com/GuiMarques02" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a className="active:text-[#5932e6] cursor-pointer transition-all duration-200 ease-in-out active:scale-110" href="https://www.linkedin.com/in/guilhermemarques02/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a className="active:text-[#5932e6] cursor-pointer transition-all duration-200 ease-in-out active:scale-110" href="https://www.instagram.com/gui_lampreia/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a className="active:text-[#5932e6] cursor-pointer transition-all duration-200 ease-in-out active:scale-110" href="https://x.com/gui_lampreia" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
