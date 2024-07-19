import React, { useState } from 'react';
import logo from '../../../src/assets/LOGO.png';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-black text-white py-4  md:py-2 z-50 relative">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          <div className="w-[18%] h-[2%] md:w-[6%] md:place-items-start">
            <img src={logo} alt="Logo" />
          </div>
          <div className="md:hidden ">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FiX size={26} /> : <FiMenu size={24} />}
            </button>
          </div>
          <ul className={`md:flex space-x-6 absolute md:static bg-black md:bg-transparent w-full md:w-auto transition-all duration-300 ease-in ${isOpen ? 'top-12 left-0 opacity-100 pb-8' : 'top-[-500px] left-0 opacity-0'}`}>
            <li className="text-center md:text-left"><a href="#" className="block py-2 md:py-0 px-4 md:px-0 hover:underline"></a></li>
            <li className="text-center md:text-left"><a href="#" className="block py-2 md:py-0 px-4 md:px-0 hover:underline">Home</a></li><hr />
            <li className="text-center md:text-left"><a href="#" className="block py-2 md:py-0 px-4 md:px-0 hover:underline">About Us</a></li><hr />
            <li className="text-center md:text-left"><a href="#" className="block py-2 md:py-0 px-4 md:px-0 hover:underline">Album</a></li><hr />
            <li className="text-center md:text-left"><a href="#" className="block py-2 md:py-0 px-4 md:px-0 hover:underline">Portfolio</a></li><hr />
            <li className="text-center md:text-left"><a href="#" className="block py-2 md:py-0 px-4 md:px-0 hover:underline">Contact</a></li><hr />
            <li className="text-center md:text-left"><a href="#" className="block py-2 md:py-0 px-4 md:px-0 hover:underline">Login</a></li><hr />
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
