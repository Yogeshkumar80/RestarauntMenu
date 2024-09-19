import React from 'react'
import { BsPlayFill, BsPauseFill } from "react-icons/bs"
import {meal} from "../../constants/index";
import "./Intro.css"
const Intro = () => {
  const vidRef= React.useRef();
  const [playVideo, setPlayVideo]= React.useState(false);

  const handleVideo= ()=>{
    setPlayVideo((prevPlayVideo)=> !(prevPlayVideo))
    if(playVideo){
      vidRef.current.pause()
    }
    else{
      vidRef.current.play()
    }
  }
  return (
    <div className="app__video">
      <video src={meal} 
       muted
       type="video/mp4"
       loop
       controls={false}
       ref= {vidRef}
      />
      <div className="app__video-overlay flex__center">
        <div onClick={handleVideo} className="app__video-overlay_video flex__center">
         { playVideo ?(
          <BsPauseFill color="#fff" fontSize={30}/>
         ): <BsPlayFill color="#fff" fontSize={30}/> }
        </div>
      </div>
     
    </div>
  )
}

export default Intro
