import React, { useState,useEffect } from 'react';
import AOS from "aos"; /* for animation  aos package*/
import "aos/dist/aos.css";




const services = [
  { name: 'WEDDINGS', imgSrc: '../../src/assets/wedding.jpg' },
  { name: 'PRE SHOOT', imgSrc: '../../src/assets/preshoot.jpg' },
  { name: 'GRADUATION', imgSrc: '../../src/assets/graduation.jpg' },
  { name: 'EVENTS', imgSrc: '../../src/assets/event.jpg' },
];

const Services = () => {


    /* for animation part */
    useEffect(() => {
      AOS.init({ duration: "1000" });
    }, []);



  return (
    <div className="flex flex-col items-center py-8" data-aos="fade-up">
      <h2 className="text-2xl  md:text-3xl lg:text-4xl font-bold mb-6" >OUR SERVICES</h2>
      
      <div className="grid grid-cols-2 gap-2 m-4 md:flex " >
        {services.map((service, index) => (
          <div key={index} className="relative h-[200px] w-[180px] group overflow-hidden " >
            <img
              src={service.imgSrc}
              alt={service.name}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg transition-all duration-300 group-hover:bg-opacity-0">
              <span className="text-white font-semibold text-lg transition-all duration-300 group-hover:translate-y-full">
                {service.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
