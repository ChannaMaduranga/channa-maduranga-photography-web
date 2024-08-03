import React, {useState,useEffect}from 'react'
import { IoClose } from "react-icons/io5";

import g1 from '../assets/g1/g1.jpg';
import g2 from '../assets/g1/g2.jpg';
import g3 from '../assets/g1/g3.jpg';
import g4 from '../assets/g1/g4.jpg';

import g5 from '../assets/g1/g5.jpg';
import g6 from '../assets/g1/g6.jpg';
import g7 from '../assets/g1/g7.jpg';
import g8 from '../assets/g1/g8.jpg';

import g9 from '../assets/g1/g9.jpg';
import g10 from '../assets/g1/g10.jpg';
import g11 from '../assets/g1/g11.jpg';
import g12 from '../assets/g1/g12.jpg';

import g13 from '../assets/g1/g13.jpg';
import g14 from '../assets/g1/g14.jpg';
import g15 from '../assets/g1/g15.jpg';
import g16 from '../assets/g1/g16.jpg';

import g17 from '../assets/g1/g17.jpg';
import g18 from '../assets/g1/g18.jpg';
import g19 from '../assets/g1/g19.jpg';
import g20 from '../assets/g1/g20.jpg';

import g21 from '../assets/g1/g21.jpg';
import g22 from '../assets/g1/g22.jpg';
import g23 from '../assets/g1/g23.jpg';
import g24 from '../assets/g1/g24.jpg';

import g25 from '../assets/g1/g25.jpg';
import g26 from '../assets/g1/g26.jpg';
import g27 from '../assets/g1/g27.jpg';
import g28 from '../assets/g1/g28.jpg';

import g29 from '../assets/g1/g29.jpg';
import g30 from '../assets/g1/g30.jpg';
import g31 from '../assets/g1/g31.jpg';
import g32 from '../assets/g1/g32.jpg';
import g33 from '../assets/g1/g33.jpg';
import g34 from '../assets/g1/g34.jpg';
import g35 from '../assets/g1/g3.jpg';
import g36 from '../assets/g1/g35.jpg';
import g37 from '../assets/g1/g36.jpg';
import g38 from '../assets/g1/g37.jpg';
import g39 from '../assets/g1/g38.jpg';


const graduations = [
  { id: 1, imgSrc: g1 },
  { id: 2, imgSrc: g2 },
  { id: 3, imgSrc: g3 },
  { id: 4, imgSrc: g4 },
  { id: 5, imgSrc: g5 },
  { id: 6, imgSrc: g6 },
  { id: 7, imgSrc: g7 },
  { id: 8, imgSrc: g8 },
  { id: 9, imgSrc: g9 },
  { id: 10, imgSrc: g10 },
  { id: 11, imgSrc: g11 },
  { id: 12, imgSrc: g12 },
  { id: 13, imgSrc: g13 },
  { id: 14, imgSrc: g14 },
  { id: 15, imgSrc: g15 },
  { id: 16, imgSrc: g16 },
  { id: 17, imgSrc: g17 },
  { id: 18, imgSrc: g18 },
  { id: 19, imgSrc: g19 },
  { id: 20, imgSrc: g20 },
  { id: 21, imgSrc: g21 },
  { id: 22, imgSrc: g22 },
  { id: 23, imgSrc: g23 },
  { id: 24, imgSrc: g24 },
  { id: 25, imgSrc: g25 },
  { id: 26, imgSrc: g26 },
  { id: 27, imgSrc: g27 },
  { id: 28, imgSrc: g28 },
  { id: 29, imgSrc: g29 },
  { id: 30, imgSrc: g30 },
  { id: 31, imgSrc: g31 },
  { id: 32, imgSrc: g32 },
  { id: 33, imgSrc: g33 },
  { id: 34, imgSrc: g34 },
  { id: 35, imgSrc: g35 },
  { id: 36, imgSrc: g36 },
  { id: 37, imgSrc: g37 },
  { id: 38, imgSrc: g38 },
  { id: 39, imgSrc: g39 },

  


];

const Graduation = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === 'overlay') {
      handleClose();
    }
  };




  return (
    <div className="py-4 lg:p-8 p-8 lg:pt-16 md:w-[80%] m-auto">
    <h2 className="text-2xl pb-8 font-bold text-left pt-24 md:pt-16 md:3xl lg:text-4xl  md:pb-8"  >Graduation</h2>
    <div className="container   grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-1 lg:gap-4" data-aos="fade-up">
      {graduations.map((work) => (
        <div key={work.id} className="flex justify-center items-center content-center">
          <img
            src={work.imgSrc}
            onClick={() => handleImageClick(work.imgSrc)}
            className="w-full h-full object-cover rounded-md cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
      ))}
    </div>

    {selectedImage && (
      <div
        id="overlay"
        onClick={handleOutsideClick}
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      >
        <div className="relative w-auto m-32">
          <img src={selectedImage} className="max-w-[350px] max-h-[500px] md:max-w-[500px] md:max-h-[500px] object-cover rounded-md" />
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 bg-white text-black rounded-full p-2"
          >
            <IoClose />
          </button>
        </div>
      </div>
    )}
  </div>
);
};


export default Graduation