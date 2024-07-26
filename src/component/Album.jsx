import React,{useState} from 'react'
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
    title: 'Oshani & Rumesh Preshoot',
    images: [img8, img9, img10, img7],
    discription : ' “Love is like the wind, you can’t see it but you can feel it 💙💍” '
  }
]

  

function Album() {
  const [album,setAlbum]= useState(albums);
  return (
    <div id="album">
        <h2 className="text-2xl font-bold text-center m-8 md:3xl lg:text-4xl "  data-aos="fade-right">Albums</h2>
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
                          
                          className="w-full h-full object-cover rounded-lg transition-transform duration-300 "
                        />
                      </div>
                      <div className='w-full h-[150px]  md:h-[170px] '>
                        <img
                          src={albums.images[1]}
                          
                          className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className='w-full h-[150px]  md:h-[170px]'>
                      <img
                        src={albums.images[2]}
                        
                        className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      />
                      </div>
                      <div className='w-full h-[150px] md:h-[170px] overflow-hidden '>
                        <img
                          src={albums.images[3]}
                          
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
    </div>
  )
}

export default Album