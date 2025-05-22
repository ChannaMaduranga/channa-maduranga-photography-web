import React, { useState, useEffect, useRef } from 'react';
import logo from '../../../src/assets/LOGO.png';
import { FiMenu, FiX } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar({ scrollToTarget }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);

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
    } else {
      navigate('/', { state: { id: targetId } });
     
      
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Wrapper for blur effect */}
      {isOpen && <div className="fixed inset-0 z-40 backdrop-blur-sm"></div>}

      <nav ref={navRef} className="bg-[#171717] text-white py-4 md:py-0 z-50 w-full fixed">
        <div className="flex lg:w-[80%] m-auto justify-between items-center px-2">
          <div className="w-[18%] h-[2%] sm:w-[12%] lg:w-[12%]">
            <a href='/'><img src={logo} alt="Logo" /></a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none pr-4 ">
              {isOpen ? <FiX size={26} /> : <FiMenu size={24} />}
            </button>
          </div>
          <ul className={`bg-[#171717] md:flex space-x-6 absolute md:static justify-center md:justify-end pr-8 md:pr-2 transition-all md:text-white duration-700 ease-in-out ${isOpen ? 'top-12 left-0 w-full opacity-100 pb-8' : 'top-[-500px] w-full left-0'}`}>
          <li className="text-center  md:text-left"><a href="#home" onClick={handleLinkClick} className="block py-2 md:py-0 px-4 md:px-0underline-animate hover:text-[#ffa200]"></a></li>
            <li className="text-center  md:text-left"><a href="#home" onClick={handleLinkClick} className="block py-2 md:py-0 px-4 md:px-0 underline-animate hover:text-[#ffa200]">Home</a></li><hr className='m-auto' />
            <li className="text-center md:text-left"><a href="#album" onClick={handleLinkClick} className="block py-2 md:py-0 px-4 md:px-0 underline-animate hover:text-[#ffa200]">Album</a></li><hr />
            {/* <li className="text-center md:text-left"><a href="#service" onClick={handleLinkClick} className="block py-2 md:py-0 px-4 md:px-0 underline-animate">Service</a></li><hr /> */}
            <li className="text-center md:text-left"><a href="#aboutUs" onClick={handleLinkClick} className="block py-2 md:py-0 px-4 md:px-0 underline-animate hover:text-[#ffa200]">About Us</a></li><hr />
            <li className="text-center md:text-left"><a href="#contact" onClick={handleLinkClick} className="block py-2 md:py-0 px-4 md:px-0 underline-animate hover:text-[#ffa200]">Contact</a></li><hr />
            <li className="text-center md:text-left"><a href="#login" onClick={handleLinkClick} className="block py-2 md:py-0 px-4 md:px-4 underline-animate hover:text-[#ffa200]">Login</a></li><hr />
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
