import React from 'react'
import AboutMeIMG from '../assets/AboutMe.jpg'

function AboutMe() {
  return (
    <div className='mt-8' id="aboutUs">
        <div>
            <h2 className="text-2xl  md:text-3xl lg:text-4xl font-bold text-center mb-8" data-aos="fade-left">About Me</h2>
        </div>
        <div className='w-full lg:flex h-auto bg-black opacity-100 p-16 md:p8 pt-16  ' data-aos="fade-right">
            <div className='lg:w-2/4 '>
                <div className='relative md:w-[35vh] w-[25vh] h-[25vh]  md:h-[35vh] justify-center items-center md:m-auto m-auto  container '>
                    <img src={AboutMeIMG} alt=""  className='w-full h-full object-cover  rounded-md transform transition-transform duration-300 ease-in-out hover:scale-110'/>
                </div>
            </div>
            <div className='relative mt-8 lg:w-1/2 '>
                <h6 className=' text-white font-bold text-center m-2 pb-4 '>I am Channa Maduranga</h6>
                <p className='text-white  text-justify transform transition-transform duration-300 ease-in-out hover:scale-110'> A dedicated photographer who captures the essence of life’s most cherished moments. Specializing in wedding, event, graduation etc. , I combine creativity and passion to produce images that tell your unique story. Whether it’s a special event or a personal portrait, my goal is to deliver stunning photos that you’ll treasure forever. </p>

                <div className=' w-full    flex items-center justify-center mt-8 '>
                   <a href='https://channamaduranga.github.io/My-Portfolio/'> <button type="button" className='w-[135px] h-[35px] bg-white rounded-lg font-semibold hover:bg-black hover:text-white hover:border-2 hover:border-white' >View Portfolio</button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe