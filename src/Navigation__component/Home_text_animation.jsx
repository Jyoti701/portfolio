import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
const Home_text_animation = () => {
  return (
    <div className='text_animation_container'>
    <h2>Hello, I'm </h2>
    <h1>Jyoti Kumar Thakur</h1><span className='handicon'>👋</span>
<div className='animated_text_container'>
<div className='linebeforetext'></div>
<div className='animated_text'>
    <ul>
        <li><span>Frontend developer</span></li>
        <li><span>Mern Stack enthusiast</span></li>
        <li><span>Web Freelancer</span></li>
    </ul>
    
</div>
</div>
<div className='info_container'>
<div className='para_info_container'><p className='para_info'>A <span>Front-End Developer</span> passionate about creating intractive application and experience on the web.</p></div>
   <div className='btn_container'>
    <button>About Me <FaTelegramPlane /></button>
    <button>My Works <FaLocationArrow /></button>
   </div>
   <div className='contact_information_container'>
<p>+91 7992376119</p>
<p>vikashthakur701@gmail.com</p>
<p>Saharsa Bihar pin code 852201</p>
   </div> 
   </div>
    </div>
    
  )
}

export default Home_text_animation