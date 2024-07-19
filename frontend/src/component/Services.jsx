import React, {useState} from 'react'




const services = [
  { name: 'WEDDINGS', imgSrc: '../../src/assets/wedding.jpg' },
  { name: 'PRE SHOOT', imgSrc:  '../../src/assets/preshoot.jpg' },
  { name: 'GRADUATION', imgSrc:  '../../src/assets/graduation.jpg'},
  { name: 'EVENTS', imgSrc: '../../src/assets/event.jpg' },
];

const Services = () => {
  return (
    <div className="flex flex-col items-center py-8">
      <h2 className="text-2xl font-bold mb-6">OUR SERVICES</h2>
      
      <div className="grid grid-cols-2 gap-2 m-4 ">
        {services.map((service, index) => (
          <div key={index} className="relative h-[200px] w-[180px]  ">
          
            
            <img
              src={service.imgSrc}
             
              alt={service.name}
              className="w-full h-full object-cover rounded-lg  "
            />

            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg">
              <span className="text-white font-semibold text-lg">
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
