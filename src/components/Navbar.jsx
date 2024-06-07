import logo from "../assets/GLM_small_white_logo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-10">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-16 w-20 cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" src={logo} alt="logo" />
      </div>
      <div className="mx-16 flex items-center justify-center gap-12 text-4xl text-white ">
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
