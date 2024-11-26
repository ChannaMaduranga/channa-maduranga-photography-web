import React, { useState,useEffect } from 'react';
import AOS from "aos"; /* for animation  aos package*/
import "aos/dist/aos.css";


import wedding from "../assets/wedding.jpg";
import preshoot from "../assets/preshoot.jpg";
import graduation from "../assets/graduation.jpg";
import event from "../assets/event.jpg";
import { Link } from 'react-router-dom';


// const services = [
//   { name: 'WEDDINGS', imgSrc: '../../channa-maduranga-photography-web/src/assets/wedding.jpg' },
//   { name: 'PRE SHOOT', imgSrc: '../../channa-maduranga-photography-web/src/assets/preshoot.jpg' },
//   { name: 'GRADUATION', imgSrc: '../../channa-maduranga-photography-web/src/assets/graduation.jpg' },
//   { name: 'EVENTS', imgSrc: '../../channa-maduranga-photography-web/src/assets/event.jpg' },
// ];


const services = [
  { name: 'WEDDINGS', imgSrc: wedding , link:"/Wedding" },
  { name: 'PRE SHOOT', imgSrc: preshoot, link:"/Preshoot" },
  { name: 'GRADUATION', imgSrc: graduation , link:"/Graduation" },
  { name: 'EVENTS', imgSrc: event , link:"/Event" },
];


const Services = () => {


    /* for animation part */
    useEffect(() => {
      AOS.init({ duration: "1000" });
    }, []);



  return (
    <div className="flex flex-col items-center justify-center m-auto pt-8 lg:pt-24 md:w-[90%]"  id="service">
      <h2 className="text-2xl  md:text-3xl lg:text-5xl font-bold lg:mb-6" data-aos="fade-in" >OUR SERVICES</h2>
      <p className='md:px-32 font-outfit text-[10px] md:text-sm xl:text-base p-4 pb-6 px-8 xl:px-64 xl:pb-16 text-center text-gray-500' data-aos="fade-up">We offer a range of professional photography services, including wedding photography to capture your special day, graduation portraits to celebrate achievements, and event photography to preserve life’s most memorable moments. Let us turn your occasions into timeless memories.</p>
      
      <div className="grid grid-cols-2 gap-2 lg:gap-16 m-4 md:flex md:w-[]  justify-center" data-aos="fade-up" >
        {services.map((service, index) => (
          
          <Link to={service.link} ><div key={index} className="relative h-[200px] w-[180px] lg:h-[280px] lg:w-[250px] group overflow-hidden " >
            <img
              src={service.imgSrc}
              
              className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg transition-all duration-300 group-hover:bg-opacity-0">
              <span className="text-white font-semibold text-lg transition-all duration-500 group-hover:translate-y-20 md:group-hover:translate-y-24">
                {service.name}
              </span>
            </div>
            
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
