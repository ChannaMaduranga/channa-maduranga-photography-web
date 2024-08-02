import React from 'react'
import cover from '../assets/cover1.png'
import logo from '../assets/LOGO.png'

import Services from '../component/Services'
import RecentWork from './RecentWork'
import Contact from './Contact'
import AboutMe from './AboutMe'
import Album from './Album'
import SlideShow from './SlideShow'

import cover1 from '../assets/home page/cover1.jpg';
import cover2 from '../assets/home page/1.jpg';
import cover3 from "../assets/home page/cover2.jpg";
import cover4 from "../assets/home page/00.jpg";
import cover5 from "../assets/home page/IMG_6658.jpg";

import ScrollToTop from './ScrollToTop'
// import cover5 from "../assets/dinna.jpg";



function Home() {


    const slideImages = [
        cover1,cover2,cover5,cover3,cover4
         ];


  return (
    
    <div id="home" className=''>
        <ScrollToTop/>
        <div className=' relative  md:h-[full] xl:h-screen w-s w-full justify-center pt-8 lg:pt-4 '>
            {/* <SlideShow slideImages={slideImages}/> */}
            <div className='overflow-hidden'>
                <SlideShow slideImages={slideImages} className=" h-full    "/> 
            </div>
            <div className='hidden absolute inset-0  bg-black opacity-25 w-screen lg:hidden'>
                <div className='absolute top-[50%] left-[70%] md:top-[35%] text-white'>
                    
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