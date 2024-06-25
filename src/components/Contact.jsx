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
 
  const en = localStorage.getItem("lang") === "EN" ? true : false;

  return (
    <div className="bg-black border-b border-neutral-600">
      <h2 className="p-10 text-4xl text-center">
        <span className="text-3xl tracking-tight text-transparent bg-gradient-to-r from-pink-400 via-slate-400 to-purple-500 bg-clip-text sm:text-4xl">
        {en ? "Feel free to contact me" : "Sem vergonhas, contacta-me"}
          
        </span>
      </h2>
        <p className="pb-10 text-lg text-center text-neutral-400">Email: sftenglm@gmail.com</p>
      
      <form onSubmit={sendEmail} className="flex flex-col items-center justify-center">
        <div className="relative w-2/3">
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder= {en ? "Leave here your message with your name and email and I'll reach to you as soon as possible." : "Escreve a tua mensagem com o teu nome e email, e tentarei responder o mais breve possível"}
            className="w-full h-40 min-h-[200px] max-h-[400px] p-4 text-black text-[18px] sm:rounded-[30px] rounded-[20px]"
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
