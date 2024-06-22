import logo from "../assets/GLM_small_white_logo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-10 mb-3 sm:mb-20">
      <div className="flex items-center flex-shrink-0">
        <img className="w-16 transition-all duration-200 ease-in-out cursor-pointer mx-7 sm:mx-16 sm:w-20 hover:scale-110" src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-center gap-6 text-3xl text-white mx-7 sm:mx-16 sm:gap-12 sm:text-4xl">
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
    </nav>
  );
};

export default Navbar;
