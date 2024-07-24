import { useState,useEffect } from 'react'
import AOS from "aos"; /* for animation  aos package*/
import "aos/dist/aos.css";

import './App.css'
import Navbar from '../src/component/Navbar/Navbar'
import Home from './component/Home'
import Footer from './component/Footer'




function App() {
  const [count, setCount] = useState(0)

    /* for animation part */
    useEffect(() => {
      AOS.init({ duration: "1000" });
    }, []);

  return (
    <>
    <div className='bg-slate-300'>
       <Navbar className=""/>
       
        <Home/>
        <Footer/>
     
    </div>
      
    </>
  )
}

export default App
