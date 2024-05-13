import React from 'react'
import img from './assets/Jyoti_thakur.png'
import './header.css'

const Logo_title = () => {
  return (
    <div className='logo_container'>
      <div className='img_container'>
<img src={img} alt="logo_img"width="100%" height="100%" className='logo_img'/>

      </div>
      <div className='title_container'>
        <h3 className='title_txt'>Jyoti Kumar Thakur</h3>
      </div>
    </div>
  )
}

export default Logo_title
