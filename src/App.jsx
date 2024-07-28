import { useState,useEffect } from 'react'
import AOS from "aos"; /* for animation  aos package*/
import "aos/dist/aos.css";
import { BrowserRouter,Routes, Route} from 'react-router-dom';


import './App.css'
import Navbar from '../src/component/Navbar/Navbar'
import Home from './component/Home'
import Footer from './component/Footer'
import MoreAlbum from './component/MoreAlbum';




function App() {
  const [count, setCount] = useState(0)

    /* for animation part */
    useEffect(() => {
      AOS.init({ duration: "1000" });
    }, []);

  return (
    <>
    <div className='bg-slate-300'>
       <Navbar/>
    </div>

    <BrowserRouter basename="/channa-maduranga-photography-web/">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Album" Component={MoreAlbum}/>
        
        
      </Routes>
    </BrowserRouter>
  
        
        <Footer/>
     
    
      
    </>
  )
}

export default App
