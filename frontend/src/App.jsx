import { useState } from 'react'

import './App.css'
import Navbar from '../src/component/Navbar/Navbar'
import Home from './component/Home'
import Footer from './component/Footer'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-slate-300'>
       <Navbar/>
       
        <Home/>
        <Footer/>
     
    </div>
      
    </>
  )
}

export default App
