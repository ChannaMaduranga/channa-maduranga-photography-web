import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const SlideShow = ({ slideImages }) => {
  return (
    <div className="slideshow-container h-[full] md:h-[400px] xl:h-screen w-screen ">
      <Fade arrows={false} easing="ease" >
        {slideImages.map((slideImage, index) => (
          <div className="each-slide  overflow-hidden " key={index}>
            <img src={slideImage} alt={`Slide ${index}`} className="slide-image h-[full] md:h-[400px] xl:h-screen w-screen object-cover overflow-hidden" />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default SlideShow;