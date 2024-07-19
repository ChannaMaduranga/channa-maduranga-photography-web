import React from 'react'
import cover from '../assets/cover1.png'
import logo from '../assets/LOGO.png'

import Services from '../component/Services'
import RecentWork from './RecentWork'
import Contact from './Contact'
import AboutMe from './AboutMe'
import Album from './Album'

function Home() {
  return (
    <div>
        <div className=' relative h-auto w-full overflow-hidden justify-center  '>
            <img src={cover} alt="" className='h-full w-full object-cover' /> 
            <div className=' absolute inset-0  bg-black opacity-25 '>
                <div className='absolute top-[40%] left-[70%] text-white'>
                    
                    <div className='w-[80%] h-[20%]'>
                        <img src={logo} alt="" />
                        <h2 className='text-xl'></h2>
                    </div> 
                </div>
            </div>
    
        </div>

       
        
        <Services/>
        <RecentWork/>
        <AboutMe/>
        <Album/>
        <Contact/>



    </div>
  )
}

export default Home