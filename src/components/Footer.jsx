import React from 'react'

const Footer = () => {
  const en = localStorage.getItem("lang") === "EN" ? true : false;
  return (
    <footer className="p-4 text-center bg-black text-neutral-500">
        <p>© Guilherme Marques 2024</p>
        <p>Created & Designed by Guilherme Marques</p>  
    </footer>
  )
}

export default Footer