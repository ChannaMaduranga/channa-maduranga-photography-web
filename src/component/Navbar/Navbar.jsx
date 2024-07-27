import React, { useState } from 'react';
import logo from '../../../src/assets/LOGO.png';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const handleLinkClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  
  return (
    <>
      <nav className="bg-black text-white py-4  md:py-2 z-50  w-full  sticky  ">
        <div className="  flex justify-between items-center px-2  ">
          <div className="w-[18%] h-[2%] sm:w-[12%] lg:w-[8%] place-items-start left-1">
            <img src={logo} alt="Logo" />
          </div>
          <div className="md:hidden ">
            <button onClick={toggleMenu} className="text-white focus:outline-none ">
              {isOpen ? <FiX size={26} /> : <FiMenu size={24} />}
            </button>
          </div>
          <ul className={`md:flex space-x-6 absolute md:static  bg-black md:justify-end transition-all md:text-white duration-300 ease-in ${isOpen ? 'top-12 left-0 w-full opacity-100 pb-8' : 'top-[-500px] w-full left-0 '}`}>
            <li className="text-center md:text-left"><a href="#" className="block py-2 md:py-0 px-4 md:px-0 hover:underline"></a></li>
            <li className="text-center md:text-left"><a href="#home" onClick={handleLinkClick} className="block py-2 md:py-0 px-4 md:px-0 hover:underline">Home</a></li><hr />
            <li className="text-center md:text-left"><a href="#album" onClick={handleLinkClick} className="block py-2 md:py-0 px-4 md:px-0 hover:underline">Album</a></li><hr />
            <li className="text-center md:text-left"><a href="#service" onClick={handleLinkClick} className="block py-2 md:py-0 px-4 md:px-0 hover:underline">Service</a></li><hr />
            <li className="text-center md:text-left"><a href="#aboutUs" onClick={handleLinkClick} className="block py-2 md:py-0 px-4 md:px-0 hover:underline">About Us</a></li><hr />
            <li className="text-center md:text-left"><a href="#contact" onClick={handleLinkClick} className="block py-2 md:py-0 px-4 md:px-0 hover:underline">Contact</a></li><hr />
            <li className="text-center md:text-left"><a href="#" onClick={handleLinkClick} className="block py-2 md:py-0 px-4 md:px-0 hover:underline">Login</a></li><hr />
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
