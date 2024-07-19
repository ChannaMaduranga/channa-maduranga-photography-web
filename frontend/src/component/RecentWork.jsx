import React from 'react';

const recentWorks = [
  { id: 1, imgSrc: '../../src/assets/wedding.jpg' },
  { id: 2, imgSrc: '../../src/assets/event.jpg', },
  { id: 3, imgSrc: '../../src/assets/1.jpg'  },
  { id: 4, imgSrc: '../../src/assets/7.jpg' },
  { id: 5, imgSrc: '../../src/assets/8.jpg'},
  { id: 6, imgSrc: '../../src/assets/00.jpg' },
  { id: 7, imgSrc: '../../src/assets/2.jpg' },
  { id: 8, imgSrc: '../../src/assets/1.jpg' },
  { id: 9, imgSrc: '../../src/assets/10.jpg' },
];

const RecentWork = () => {
  return (
    <div className="py-4">
      <h2 className="text-2xl font-bold text-center mb-6">Recent Works</h2>
      <div className="container mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-1 ">
        {recentWorks.map((work) => (
          <div key={work.id} className="relative ">
            <img
              src={work.imgSrc}
             
              className="w-full h-full object-cover rounded-md "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentWork;
