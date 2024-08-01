import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";

import img1 from '../../src/assets/wedding.jpg';
import img2 from '../../src/assets/event.jpg';
import img3 from '../../src/assets/1.jpg';
import img4 from '../../src/assets/7.jpg';
import img5 from '../../src/assets/8.jpg';
import img6 from '../../src/assets/00.jpg';
import img7 from '../../src/assets/2.jpg';
import img8 from '../../src/assets/1.jpg';
import img9 from '../../src/assets/10.jpg';
import img10 from '../../src/assets/DSC01017.jpg';
import img11 from '../../src/assets/27.jpg';
import img12 from '../../src/assets/IMG_0430.jpg';
import img13 from '../../src/assets/15.jpg';
import img14 from '../../src/assets/18.jpg';

const recentWorks = [
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
  { id: 14, imgSrc: img14 }
];

const RecentWork = () => {
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
    <div className="py-4 lg:p-8 p-8 lg:pt-16" >
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-6 lg:pb-16" data-aos="fade-right">Recent Works</h2>
      <div className="container   grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-1" data-aos="fade-up">
        {recentWorks.map((work) => (
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

export default RecentWork;
