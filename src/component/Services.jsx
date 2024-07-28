import React, { useState,useEffect } from 'react';
import AOS from "aos"; /* for animation  aos package*/
import "aos/dist/aos.css";

import wedding from "../assets/wedding.jpg";
import preshoot from "../assets/preshoot.jpg";
import graduation from "../assets/graduation.jpg";
import event from "../assets/event.jpg";


// const services = [
//   { name: 'WEDDINGS', imgSrc: '../../channa-maduranga-photography-web/src/assets/wedding.jpg' },
//   { name: 'PRE SHOOT', imgSrc: '../../channa-maduranga-photography-web/src/assets/preshoot.jpg' },
//   { name: 'GRADUATION', imgSrc: '../../channa-maduranga-photography-web/src/assets/graduation.jpg' },
//   { name: 'EVENTS', imgSrc: '../../channa-maduranga-photography-web/src/assets/event.jpg' },
// ];


const services = [
  { name: 'WEDDINGS', imgSrc: wedding },
  { name: 'PRE SHOOT', imgSrc: preshoot },
  { name: 'GRADUATION', imgSrc: graduation },
  { name: 'EVENTS', imgSrc: event },
];


const Services = () => {


    /* for animation part */
    useEffect(() => {
      AOS.init({ duration: "1000" });
    }, []);



  return (
    <div className="flex flex-col items-center py-8 lg:p-16" data-aos="fade-up" id="service">
      <h2 className="text-2xl  md:text-3xl lg:text-4xl font-bold mb-6" >OUR SERVICES</h2>
      
      <div className="grid grid-cols-2 gap-2 m-4 md:flex " >
        {services.map((service, index) => (
          <div key={index} className="relative h-[200px] w-[180px] group overflow-hidden " >
            <img
              src={service.imgSrc}
              
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
