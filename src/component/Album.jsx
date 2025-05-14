import React,{useState} from 'react'
import { IoClose } from "react-icons/io5";
import {Link } from 'react-router-dom';
import img1 from '../assets/wedding.jpg';
import img2 from '../assets/wedding2.jpg';
import img3 from '../assets/wedding3.jpg';
import img4 from '../assets/2.jpg';
import img5 from '../assets/7.jpg';
import img6 from '../assets/event.jpg';
import img12 from '../assets/00.jpg';
import img8 from '../assets/Engagment/16x24 Enlargment.jpg';
import img9 from '../assets/Engagment/19.jpg';
import img7 from '../assets/Engagment/2.jpg';
import img10 from '../assets/Engagment/9.jpg';
import img11 from '../assets/wedding4.jpg';



const albums = [
  {
    title: 'Rumesh & Oshani',
    images: [img1, img2, img3,img11],
    discription : ' "Take my hand, take my whole life too. For I can’t help falling in love with you ❤️💍"'
  },
  {
    title: 'Camiliya Live in Concert 2023 ',
    images: [img4, img5, img6,img12],
    discription : ' "Organize by Faculty of Science | University of Jaffna"'
  },
  {
    title: 'Savinda & Udara Engagement',
    images: [img8, img9, img10, img7],
    discription : ' “Love is like the wind, you can’t see it but you can feel it 💙💍” '
  }
]


  

function Album() {

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
    <div id="album" className='lg:pt-16'>
        <h2 className="text-2xl font-bold text-center p-4 md:text-3xl lg:text-5xl "  data-aos="fade-up">Albums</h2>
      <p className='md:px-32 font-outfit text-[10px] md:text-sm xl:text-base  px-8 xl:px-64 md:pb-6 xl:pb-16 lg:p-4 text-center text-gray-500' data-aos="fade-up">Explore a selection of our recent albums, filled with timeless memories from weddings, graduations, and special events. Let these highlights inspire your next story with us.</p>
        
        <div className='w-[90%] lg:w-full m-auto sm:grid sm:grid-cols-2 sm:gap-8 md:grid md:gap-0 md:grid-cols-2 lg:grid-cols-3' data-aos="fade-up">
          {album.map((albums,index)=>(
          <div key = {index} className="md:left-0   md:m-4 my-8 " data-aos="fade-up">
              <div className='w-full  '>
              <h2 className='font-semibold '>{albums.title}</h2>
                <p className='text-[12px] my-2 h-8'>{albums.discription}</p>
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

      
        <div className='flex justify-center mt-8' data-aos="fade-right">
         <Link to="/Album">
          <button type="button" className='w-[135px] h-[35px] bg-white border-2 border-black rounded-lg font-semibold hover:bg-black hover:text-white hover:border-2 hover:border-white'  >View More</button>
         </Link> 
        </div>
    </div>
  )
}

export default Album