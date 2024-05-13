import './header.css'
import { FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";

import { Link, NavLink } from "react-router-dom"
const Navigation = () => {
  return (
    <div className="navigation_container">
      <ul>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/about"className='nav_item'><li>About</li></NavLink>
        <NavLink to="/services"><li>Services</li></NavLink>
        <NavLink to="/portfolio"className='nav_item'><li>Portfolio</li></NavLink>
        <NavLink to="/contact"className='nav_item'><li>Contact</li></NavLink>
      </ul>
      <div className='social_icon_container'>
<FaLinkedin color='#282856'/>
<IoIosMail color='#282856' />
<FaGithub  color='#282856'/>
    </div>
    <div className="copyright"><p>Copyright © 2023 Jyoti Kuamr Thakur. All rights reserved.</p></div>
    </div>
    
  )
}

export default Navigation
