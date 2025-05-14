import React, {useState,useEffect}from 'react'
import { IoClose } from "react-icons/io5";

import img1 from '../../src/assets/wedding/1.jpg';
import img2 from '../../src/assets/wedding/2.jpg';
import img3 from '../../src/assets/wedding/3.jpg';
import img4 from '../../src/assets/wedding/4.jpg';
import img5 from '../../src/assets/wedding/5.jpg';
import img6 from '../../src/assets/wedding/6.jpg';
import img7 from '../../src/assets/wedding/7.jpg';
import img8 from '../../src/assets/wedding/8.jpg';
import img9 from '../../src/assets/wedding/9.jpg';
import img10 from '../../src/assets/wedding/10.jpg';
import img11 from '../../src/assets/wedding/11.jpg';
import img12 from '../../src/assets/wedding/12.jpg';
import img13 from '../../src/assets/wedding/13.jpg';
import img14 from '../../src/assets/wedding/14.jpg';
import img15 from '../../src/assets/wedding/15.jpg';
import img16 from '../../src/assets/wedding/16.jpg';
import img17 from '../../src/assets/wedding/17.jpg';
import img18 from '../assets/Engagment/000.jpg';
import img19 from '../assets/Engagment/2.jpg';
import img20 from '../assets/Engagment/8.jpg';
import img21 from '../assets/Engagment/11.jpg';
import img22 from '../assets/Engagment/14.jpg';
import img23 from '../assets/Engagment/19.jpg';
import img24 from '../assets/Engagment/5.jpg';
import img25 from '../assets/Engagment/10.jpg';
import img26 from '../assets/Engagment/13.jpg';
import img27 from '../assets/Engagment/18.jpg';
import img28 from '../assets/Engagment/20.jpg';

const weddings = [
  { id: 1, imgSrc: img1 },
  { id: 2, imgSrc: img2 },
  { id: 3, imgSrc: img3 },
  { id: 4, imgSrc: img4 },
  { id: 5, imgSrc: img5 },
  { id: 6, imgSrc: img6 },
  { id: 7, imgSrc: img7 },
  { id: 8, imgSrc: img8 },
  { id: 9, imgSrc: img9 },
  { id: 10, imgSrc: img10 },
  { id: 11, imgSrc: img11 },
  { id: 12, imgSrc: img12 },
  { id: 13, imgSrc: img13 },
  { id: 14, imgSrc: img14 },
  { id: 15, imgSrc: img15 },
  { id: 16, imgSrc: img16 },
  { id: 17, imgSrc: img17 },
  { id: 18, imgSrc: img18 },
  { id: 19, imgSrc: img19 },
  { id: 20, imgSrc: img20 },
  { id: 21, imgSrc: img21 },
  { id: 22, imgSrc: img22 },
  { id: 23, imgSrc: img23 },
  { id: 24, imgSrc: img24 },
  { id: 25, imgSrc: img25 },
  { id: 26, imgSrc: img26 },
  { id: 27, imgSrc: img27 },
  { id: 28, imgSrc: img28 },
 
];

const Wedding = () => {
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
    <div className="py-4 lg:p-8 p-1 lg:pt-16 md:w-[80%] m-auto">
    <h2 className="text-2xl p-4 pb-8 font-bold text-left pt-24 md:pt-16 md:3xl lg:text-4xl  md:pb-8"  >Wedding Photography</h2>
    <div className="container   grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-1 lg:gap-4" data-aos="fade-up">
      {weddings.map((work) => (
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
        <img src={selectedImage} className="max-w-[350px] max-h-[500px] md:max-w-[600px] md:max-h-[500px] lg:max-w-[700px] lg:max-h-[600px] object-cover rounded-md" />

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


export default Wedding