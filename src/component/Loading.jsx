import React , {useState,useEffect} from 'react'
import loadingImg from "../assets/loading.gif";
import "./Loading.css";




function Loading() {
    const [showImg, setShowImg] = useState(true)

    useEffect(() => {
        setTimeout(() =>{
            setShowImg(false)
            console.log('loading complete')
            //add your action after loading complete here. For example, redirect to another page.
            
        },3000)
    },[])

    return (
        <div>
          <div className="preloader">
            <div className="preloader-image">
              <img src={loadingImg} />{" "}
            </div>{" "}
          </div>
        </div>
      );
    
  
}

export default Loading