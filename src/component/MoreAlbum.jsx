import React,{useState} from 'react'
import {Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";

import img1 from '../assets/wedding.jpg';
import img2 from '../assets/wedding2.jpg';
import img3 from '../assets/wedding3.jpg';
import img4 from '../assets/2.jpg';
import img5 from '../assets/7.jpg';
import img6 from '../assets/event.jpg';
import img12 from '../assets/00.jpg';
import img8 from '../assets/0.jpg';
import img9 from '../assets/15.jpg';
import img7 from '../assets/18.jpg';
import img10 from '../assets/22.jpg';
import img11 from '../assets/wedding4.jpg';

import g1 from '../assets/g1/g1.jpg';
import g2 from '../assets/g1/g2.jpg';
import g3 from '../assets/g1/g3.jpg';
import g4 from '../assets/g1/g4.jpg';

import g5 from '../assets/g1/g5.jpg';
import g6 from '../assets/g1/g6.jpg';
import g7 from '../assets/g1/g7.jpg';
import g8 from '../assets/g1/g8.jpg';

import g9 from '../assets/g1/g9.jpg';
import g10 from '../assets/g1/g10.jpg';
import g11 from '../assets/g1/g11.jpg';
import g12 from '../assets/g1/g12.jpg';

import g13 from '../assets/g1/g13.jpg';
import g14 from '../assets/g1/g14.jpg';
import g15 from '../assets/g1/g15.jpg';
import g16 from '../assets/g1/g16.jpg';

import p1 from '../assets/goingdown/1.jpg';
import p2 from '../assets/goingdown/IMG_8349.jpg';
import p3 from '../assets/goingdown/IMG_8818.jpg';
import p4 from '../assets/goingdown/IMG_9024.jpg';

import g17 from '../assets/g1/g17.jpg';
import g18 from '../assets/g1/g18.jpg';
import g19 from '../assets/g1/g19.jpg';
import g20 from '../assets/g1/g20.jpg';

import g21 from '../assets/g1/g21.jpg';
import g22 from '../assets/g1/g22.jpg';
import g23 from '../assets/g1/g23.jpg';
import g24 from '../assets/g1/g24.jpg';

import g25 from '../assets/g1/g25.jpg';
import g26 from '../assets/g1/g26.jpg';
import g27 from '../assets/g1/g27.jpg';
import g28 from '../assets/g1/g28.jpg';

import g29 from '../assets/g1/g29.jpg';
import g30 from '../assets/g1/g30.jpg';
import g31 from '../assets/g1/g31.jpg';
import g32 from '../assets/g1/g32.jpg';

import E1 from '../assets/Engagment/16x24 Enlargment.jpg';
import E2 from '../assets/Engagment/2.jpg';
import E3 from '../assets/Engagment/9.jpg';
import E4 from '../assets/Engagment/19.jpg';

import h1 from '../assets/DSC01017.jpg';
import h2 from '../assets/DSC01034.jpg';
import h3 from '../assets/DSC01099.jpg';
import h4 from '../assets/DSC011125.jpg';

import ScrollToTop from './ScrollToTop';


const albums = [
  {
    title: 'Rumesh & Oshani',
    images: [img1, img2, img3,img11],
    discription : ' "Take my hand, take my whole life too. For I can’t help falling in love with you ❤️💍"'
  },
  {
    title: 'Oshani & Rumesh Homecoming ',
    images: [h1, h2, h3,h4],
    discription : ' " Love is that condition in which the happiness of another person is essential to your own 💙💍 "'
  },
  {
    title: 'Camiliya Live in Concert 2023 ',
    images: [img4, img5, img6,img12],
    discription : ' "Organize by Faculty of Science | University of Jaffna"'
  },
  {
    title: 'Oshani & Rumesh Preshoot',
    images: [img8, img9, img10, img7],
    discription : ' “Love is like the wind, you can’t see it but you can feel it 💙💍” '
  },
  {
    title: "Malaka's Graduation Day",
    images: [g3, g2, g1, g4],
    discription : ' “A heartfelt congratulations on your well-deserved success!"'
  },
  {
    title: "Chamodi's Graduation Day",
    images: [g5, g6, g7, g8],
    discription : ' 38th General Convocation 2024 | University of Jaffna'
  },
  {
    title: "Jerom's Graduation Day",
    images: [g21, g23, g22, g24],
    discription : ' 38th General Convocation 2024 | University of Jaffna'
  },
  {
    title: "Nisansala's Graduation Day",
    images: [g9, g10, g11, g12],
    discription : 'Congratulations on your graduation and best wishes for your next adventure! 👩‍🎓'
  },
  {
    title: "18th General  Convocation  2023  | SLIATE",
    images: [g13, g15, g14, g16],
    discription : 'Congratulations on your graduation and best wishes for your next adventure! 👩‍🎓'
  },
  {
    title: "Savinda & Udara Engagement Day",
    images: [E1, E2, E3, E4],
    discription : '"Two souls with but a single thought, two hearts that beat as one."🍂'
  },
  {
    title: "Sahurdha Pranama 2024 | Going Down Party",
    images: [p1, p2, p3, p4],
    discription : 'Going Down Party 2024| Faculty of Science | University of Jaffna'
  },
  {
    title: "Dilini's Graduation Day  | SLIATE",
    images: [g17, g18, g19, g20],
    discription : '18th General  Convocation  2023  | SLIATE 👩‍🎓'
  },
  {
    title: "Supul's Graduation Day  | UOJ",
    images: [g29, g31, g30, g32],
    discription : '37th General  Convocation  2023  | University of Jaffna 👩‍🎓'
  },
  {
    title: "Chamodi's Graduation Day  | UOJ",
    images: [g25, g26, g27, g28],
    discription : '37th General  Convocation  2023  | University of Jaffna 👩‍🎓'
  },

]


  

function MoreAlbum() {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (images) => {
    setSelectedImage(images);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === 'overlay') {
      handleClose();
    }
  };




  const [album,setAlbum]= useState(albums);


  return (
    <div id="album" className='lg:pt-16 z-50'>
      <ScrollToTop/>
        <h2 className="text-2xl font-bold text-left pt-24 md:pt-16 md:3xl lg:text-4xl pl-[10%] md:pl-[11%] md:pb-8"  >Albums</h2>
        <div className='w-[80%] m-auto sm:grid sm:grid-cols-2 sm:gap-8 md:grid md:gap-0 md:grid-cols-2 lg:grid-cols-3' data-aos="fade-right">
          {album.map((albums,index)=>(
          <div key = {index} className='md:left-0   md:m-4 my-8'>
              <div className='w-full  '>
              <h2 className='font-semibold '>{albums.title}</h2>
                <p className='text-[12px] my-2'>{albums.discription}</p>
                <div className='w-full h-[50%] relative grid grid-cols-2 gap-1 '>
                      <div className='w-full h-[150px] md:h-[170px]   '>
                        <img
                          src={albums.images[0]}
                          onClick={() => handleImageClick(albums.images[0])}
                          className="w-full h-full object-cover rounded-lg transition-transform duration-300 "
                        />
                      </div>
                      <div className='w-full h-[150px]  md:h-[170px] '>
                        <img
                          src={albums.images[1]}
                          onClick={() => handleImageClick(albums.images[1])}
                          className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className='w-full h-[150px]  md:h-[170px]'>
                      <img
                        src={albums.images[2]}
                        onClick={() => handleImageClick(albums.images[2])}
                        className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      />
                      </div>
                      <div className='w-full h-[150px] md:h-[170px] overflow-hidden '>
                        <img
                          src={albums.images[3]}
                          onClick={() => handleImageClick(albums.images[3])}
                          className="w-full h-full justify-center items-center  object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    
                    



                </div>
              </div>
              <div className='w-2/4 hidden '>
                  <p className='text-[11px] md:text-[14px] items-center justify-center mt-[50%] m-4 ml-8'>{albums.discription}</p>
              </div>
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
             <IoClose className=''/>
            </button>
          </div>
        </div>
      )}
        
    </div>
  )
}

export default MoreAlbum