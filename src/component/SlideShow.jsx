import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const SlideShow = ({ slideImages }) => {
  return (
    <div className="slideshow-container md:h-[350px] w-screen">
      <Slide arrows={false} easing="ease" >
        {slideImages.map((slideImage, index) => (
          <div className="each-slide  " key={index}>
            <img src={slideImage} alt={`Slide ${index}`} className="slide-image h-[250px] md:h-[350px] w-full object-cover" />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SlideShow;