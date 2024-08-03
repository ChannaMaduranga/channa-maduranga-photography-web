import React, { useState } from 'react';
import { FiUser } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import emailjs from '@emailjs/browser';

function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    mobileNo: "",
    subject: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm('service_d1jtp68', 'template_th3m56m', e.target, 'fYKSFV6eZ5J98ecpN');
      setContactForm({
        name: "",
        email: "",
        mobileNo: "",
        subject: "",
        message: ""
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };

  const closeModal = () => {
    setIsSubmitted(false);
  };

  return (
    <div className='md:mt-16 mt-8 mb-8' id="contact">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-6 lg:mb-12" data-aos="fade-up">Contact Us</h2>
      <div className='bg-[#323232] w-full h-full m-auto flex flex-col lg:flex-row lg:gap-4 xl:gap-16 justify-center items-center' data-aos="fade-up">
        <div className='bg-white rounded-md mx-8 m-8' data-aos="fade-up">
          <form className='contact__form' onSubmit={sendEmail}>
            <div className="mb-4 flex gap-4  m-8 border-b">
              <FiUser />
              <input
                type="text"
                placeholder='Name'
                className='outline-none'
                name='name'
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                required
              />
            </div>
            <div className="mb-4 flex gap-4 m-8 border-b">
              <MdOutlineEmail />
              <input
                type="email"
                placeholder='Email'
                className='outline-none'
                name="email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                required
              />
            </div>
            <div className="mb-4 flex gap-4 m-8 border-b">
              <FiPhone />
              <input
                type="text"
                placeholder='Mobile No'
                className='outline-none'
                name="mobileNo"
                value={contactForm.mobileNo}
                onChange={(e) => setContactForm({ ...contactForm, mobileNo: e.target.value })}
                required
              />
            </div>
            <div className="mb-4 flex gap-4 m-8 border-b">
              <AiOutlineExclamationCircle />
              <input
                type="text"
                placeholder='Subject'
                className='outline-none'
                name="subject"
                value={contactForm.subject}
                onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                required
              />
            </div>
            <div className="mb-4 flex gap-4 m-8 border-b">
              <FaRegPenToSquare />
              <input
                type="text"
                placeholder='How can we help you?'
                className='outline-none'
                name="message"
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                required
              />
            </div>
            <div className='flex mt-8 float-left m-8'>
              <button
                type="submit"
                className='w-[90px] h-[35px] bg-black rounded-3xl font-semibold text-white hover:bg-white hover:text-black hover:border-2 hover:border-black flex items-center gap-1 justify-center'
              >
                Send <IoSend />
              </button>
            </div>
          </form>
        </div>
        <div className='text-white justify-center ' >
          <div className=' m-2   '>
            <h2 className='text-lg  md:pb-8  text-[35px] md:text-[50px] text-center lg:text-[50px] mb-8 md:mb-4 lg:pb-24  '>CONTACT US</h2>
            <p className='text-sm opacity-70 lg:text-[20px]  '>Send your request</p>
          </div>
          <div className='text-[12px] m-2'>
            <div className=' md:flex gap-8'>
              <p >Email: eventblissstudio@gmail.com</p>
              <p >Phone: 076 7450489</p>
            </div>
            <div className='flex m-8 justify-center md:gap-4'>
              <a href="https://www.instagram.com/channa_maduranga_photography/"><FaInstagram size={16} className='mr-4 md:size-6 group-hover:scale-110' /></a>
              <a href="https://web.facebook.com/profile.php?id=100085634577383"><FaSquareFacebook size={16} className='mr-4 md:size-6' /></a>
              <a href="https://www.youtube.com/channel/UC6PwTQhYUvM7_YxHDek3g7w"><IoLogoYoutube size={16} className='mr-4  md:size-6' /></a>
              <a href="https://wa.me/message/ZQBFTQ25FYECF1"><FaWhatsapp size={16} className='md:size-6' /></a>
            </div>
          </div>
        </div>
      </div>

      {isSubmitted && (
        <div className='fixed  inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-8 rounded-lg shadow-lg text-center w-[80%] lg:w-auto'>
            <h3 className='text-lg font-bold mb-4'>Success</h3>
            <p>Your message has been sent successfully!</p>
            <button
              onClick={closeModal}
              className='mt-4 px-5 py-1 border-2 border-black bg-white text-black rounded-3xl font-semibold hover:bg-black hover:text-white'
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact;
