import React , {useState}from 'react'
import { FiUser } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";

import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';


function Contact() {
  const sendEmail = async(e) =>{
    e.preventDefault();
    

  emailjs.sendForm('service_d1jtp68','template_th3m56m',e.target,'fYKSFV6eZ5J98ecpN')
}

const [update,setUpdate] = useState(false);

const [contactForm, setContactForm] = useState({
 name:"",
 email:"",
 mobileNo:"",
 subject:"",
 message:""
 

});


  


  return (
    <div className='md:mt-16 mt-8' id="contact">
       <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6" data-aos="fade-up">Contact Us</h2>
       <div className='bg-black  w-full h-full m-auto flex  flex-col lg:flex-row justify-center items-center' data-aos="fade-up" >
          <div className='bg-white  rounded-md mx-8 m-8 ' >
             <form className='contact__form' onSubmit={sendEmail}>
                <div className="mb-4 flex gap-4 m-8 border-b">
                    <FiUser />
                   <input type="text" placeholder='Name' className='outline-none ' name='name'   />
                </div>
                <div className="mb-4 flex gap-4 m-8 border-b">
                    <MdOutlineEmail />
                   <input type="email" placeholder='Email' className='outline-none ' name="email"  />
                </div>
                <div className="mb-4 flex gap-4 m-8 border-b">
                    <FiPhone />
                   <input type="text" placeholder='Mobile No' className='outline-none ' name="mobileNo"   />
                </div>
                <div className="mb-4 flex gap-4 m-8 border-b">
                    <AiOutlineExclamationCircle />
                   <input type="text" placeholder='Subject' className='outline-none ' name="subject" />
                </div>
                <div className="mb-4 flex gap-4 m-8 border-b">
                    <FaRegPenToSquare />
                   <input type="text" placeholder='How can we help you?'  className='outline-none '  name="message"  />
                </div>
                <div className='    flex  mt-8 float-left m-8'>
                    <button type="submit"  className='w-[90px] h-[35px] bg-black rounded-3xl font-semibold text-white hover:bg-white hover:text-black hover:border-2 hover:border-black flex items-center gap-1 justify-center'  >Send <IoSend/></button>
                </div>
              </form>
          </div>
          <div  className=' text-white md:m-8 '>
              <div className='lg:m-8 m-2'>
                <h2 className='text-lg lg:text-[40px] '>Contact</h2>
                <p className='text-sm opacity-70 lg:text-[12px] lg:m-8'>Send your request</p>
              </div>
              <div className='text-[12px] m-2 md:m-8'>
                <p>Email:  channamaduranga4@gmail.com</p>
                <p>Phone:  076 7450489</p>
                <div className='flex m-8 justify-center md:gap-4'>
                <a href="https://www.instagram.com/channa_maduranga_photography/"> <FaInstagram size={16} className='mr-4 md:size-6' /></a>
                  <a href="https://web.facebook.com/profile.php?id=100085634577383"><FaSquareFacebook size={16} className='mr-4 md:size-6' /></a>
                  <a href="https://www.youtube.com/channel/UC6PwTQhYUvM7_YxHDek3g7w"><IoLogoYoutube size={16} className='md:size-6' /> </a>
                </div>
              </div>
          </div>
       </div>
    </div>
  )
}

export default Contact