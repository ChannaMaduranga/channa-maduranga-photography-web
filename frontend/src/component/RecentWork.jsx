import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";

const recentWorks = [
  { id: 1, imgSrc: '../../src/assets/wedding.jpg' },
  { id: 2, imgSrc: '../../src/assets/event.jpg' },
  { id: 3, imgSrc: '../../src/assets/1.jpg' },
  { id: 4, imgSrc: '../../src/assets/7.jpg' },
  { id: 5, imgSrc: '../../src/assets/8.jpg' },
  { id: 6, imgSrc: '../../src/assets/00.jpg' },
  { id: 7, imgSrc: '../../src/assets/2.jpg' },
  { id: 8, imgSrc: '../../src/assets/1.jpg' },
  { id: 9, imgSrc: '../../src/assets/10.jpg' },
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
    <div className="py-4 lg:p-8">
      <h2 className="text-2xl  md:text-3xl lg:text-4xl font-bold text-center mb-6 lg:pb-16 " data-aos="fade-right">Recent Works</h2>
      <div className="container mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-1 ">
        {recentWorks.map((work) => (
          <div key={work.id} className="relative ">
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
            <img src={selectedImage} className="max-w-[350px] max-h-[500px] md:max-w-[500px] md:max-h-[500px]  object-cover rounded-md" />
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 bg-white text-black rounded-full p-2"
            >
             <IoClose className=''/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentWork;
