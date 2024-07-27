import React from 'react'
import cover from '../assets/cover1.png'
import logo from '../assets/LOGO.png'

import Services from '../component/Services'
import RecentWork from './RecentWork'
import Contact from './Contact'
import AboutMe from './AboutMe'
import Album from './Album'
import SlideShow from './SlideShow'

import cover1 from '../assets/cover1.png';
import cover2 from '../assets/1.jpg';
import cover3 from "../assets/cover2.jpg";
import cover4 from "../assets/00.jpg";
// import cover5 from "../assets/dinna.jpg";



function Home() {


    const slideImages = [
        cover1,cover2,cover3,cover4  
         ];


  return (
    <div id="home">
        <div className=' relative  md:h-[350px] w-screen  justify-center container '>
            {/* <SlideShow slideImages={slideImages}/> */}
            <div className='mt-[] '>
                <SlideShow slideImages={slideImages} className=" h-full w-full object-cover "/> 
            </div>
            <div className=' absolute inset-0  bg-black opacity-25 w-screen'>
                <div className='absolute top-[40%] left-[70%] md:top-[30%] text-white'>
                    
                    <div className='w-[80%] h-[20%]'>
                        <img src={logo} alt="" />
                        <h2 className='text-xl'></h2>
                    </div> 
                </div>
            </div>
    
        </div>

       
        <div className='md:w-[80%] md:justify-center md:items-center md:m-auto bg-white'>
            <Services/>
            <RecentWork/>
            <AboutMe />
            <Album/>
            <Contact/>
        </div>



    </div>
  )
}

export default Home