import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { IoIosSend } from "react-icons/io";
import logo from "../assets/GLM_small_white_logo.png";

const Contact = () => {
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eoeyyqq', 'template_vszcx9y', e.target, 'ufzDJtuJhcpoGncQF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    setMessage('');
  };

  return (
    <div className="border-b border-neutral-600 bg-black">
      <h2 className="p-10 text-center text-4xl">
        <span className="bg-gradient-to-r from-pink-400 via-slate-400 to-purple-500 bg-clip-text text-transparent text-4xl tracking-tight">
          Feel free to contact me
        </span>
      </h2>
      
      <form onSubmit={sendEmail} className="flex flex-col items-center justify-center">
        <div className="relative w-2/3">
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Leave here your message with your name and email..."
            className="w-full h-40 min-h-[200px] max-h-[400px] p-4 text-black text-[18px] rounded-[30px]"
          />
          <button type="submit" className="absolute bottom-5 right-4 text-2xl bg-black p-2 rounded-full hover:bg-[#5932e6]">
            <IoIosSend />
          </button>
        </div>
      </form>
      <div className="flex justify-center my-10">
        <img
          className="mx-[50px] w-[50px] cursor-pointer transition-all duration-200 ease-in-out hover:scale-110"
          src={logo}
          alt="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          onMouseDown={(e) => e.target.style.filter = 'invert(36%) sepia(84%) saturate(6923%) hue-rotate(226deg) brightness(100%) contrast(104%)'}
          onMouseUp={(e) => e.target.style.filter = 'none'}
        />
      </div>
    </div>
  );
};

export default Contact;
