import React , {useState,useEffect} from 'react'
import loadingImg from "../assets/loading.gif";
import "./Loading.css";
import logopng from "../assets/logo for gif.png"




function Loading() {
    const [showImg, setShowImg] = useState(true)

    useEffect(() => {
        setTimeout(() =>{
            setShowImg(false)
            //console.log('loading complete')
            //add your action after loading complete here. For example, redirect to another page.
            
        },3000)
    },[])

    return (
        <div className="h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <img src={logopng} className="w-16 h-16 p-2 lg:w-24 lg:h-24" alt="" />
          <div className="dots mt-4"></div> {/* Add margin to separate elements */}
        </div>
      </div>
      );
    
  
}

export default Loading