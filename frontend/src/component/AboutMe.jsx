import React from 'react'
import AboutMeIMG from '../assets/AboutMe.jpg'

function AboutMe() {
  return (
    <div className='mt-8'>
        <div>
            <h2 className="text-2xl font-bold text-center mb-8">About Me</h2>
        </div>
        <div className='w-full h-auto bg-black opacity-100 p-8 pt-16 md-flex'>
            <div className='relative  w-[25vh] h-[25vh]  justify-center items-center m-auto container'>
                <img src={AboutMeIMG} alt=""  className='w-full h-full object-cover rounded-md '/>
            </div>
            <div className='relative m-8'>
                <h6 className=' text-white font-bold text-center m-4 '>I am Channa Maduranga</h6>
                <p className='text-white  text-justify'> A dedicated photographer who captures the essence of life’s most cherished moments. Specializing in wedding, event, graduation etc. , I combine creativity and passion to produce images that tell your unique story. Whether it’s a special event or a personal portrait, my goal is to deliver stunning photos that you’ll treasure forever. </p>

                <div className=' w-full    flex items-center justify-center mt-8 '>
                    <button type="button" className='w-[135px] h-[35px] bg-white rounded-lg font-semibold hover:bg-black hover:text-white hover:border-2 hover:border-white' >View Portfolio</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe