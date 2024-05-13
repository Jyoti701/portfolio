import React from 'react'
import img1 from './image/carton_boy.png'
import img2 from './image/1.png'


const Home = () => {
  return (
    <div className='home_continer_layout'>
    <div className='img_container_boy'>
     <img src={img1} alt='home_png' className='carton_boy_home'/>
     </div>
     <div className='circular_img_container'>
     <img src={img2} alt='circular_ring' className='circular_png'/>
     </div>
    </div>
  )
}

export default Home;
