
import { Link } from "react-router-dom"
const Navigation = () => {
  return (
    <div className="navigation_container">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="social_links"></div>
      <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
    </div>
  )
}

export default Navigation
