import React from 'react'
import './contact.css'
import email from './image/email.jpg'
import linkedin from './image/linkedin.png'
import github from './image/github.png'

const Contact = () => {
  const datasocialmedia=[
    {
    icon:email,
    txt:"Mail",
    link:"mailto:vikashthakur701@gmail.com"
  },
  {
    icon:linkedin,
    txt:"LinkedIn"
  },
  {
    icon:github,
    txt:"GitHub",
    link:'https://github.com/Jyoti701'
  },
]
  return (
    <div className='contact_container'>
    <div className='left_contact_container'>
<p className='letsconnect'>- LET'S CONNECT</p>
<h2 className='getintouch'>Get In Touch</h2>
<p className='currentlyavilable'>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7</p>
   <div className='social_icon_container'>
    {
      datasocialmedia.map((item,index)=>{
       return(
        <a href={item.link} target="_blank" key={index}><div className='icon_box'>
        <img src={item.icon}alt="social-icon"/>
        <p className='icon_txt'>{item.txt}</p>
        </div></a>
       ) 
      })
    }
   </div>
    </div>
    <div className='right_contact_container'>
<form>
  <input type="text" placeholder='enter your name' className='namefield commoninput'/>
  <input type='email'placeholder='enter your email id'className='emailid commoninput'/>
  <input type='number'placeholder='enter your mobile number'className='mobileno commoninput'/>
<textarea placeholder='Enter your message here'className='message_box'></textarea>
<input type='submit'value="submit"className='submit_btn'></input>
  
</form>
    </div>
    </div>
  )
}

export default Contact