import './portfolio.css'
import Projec1 from './image/university.jpg'
import project2 from './image/project2img.png'
import project3 from './image/project3img.png'
const Portfolio = () => {
let imgobj=[
  {
img:Projec1,
text:"Eduford",
description:"EduFord is the world's largest university, offering a wide range of educational programs and resources to students around the globe.",
link:"https://g-eduford.netlify.app/"
},
{
img:project2,
text:"Tasty burger",
link:"#",
description:"Our Tasty Burger website is designed with our customers in mind, ensuring a seamless experience whether you're browsing from a computer, tablet, or smartphone. With a modern and intuitive interface, you can easily explore our menu, place orders online. our sitealso include customer reviews, and the latest promotions to keep you informed and engaged."
},
{
  img:project3, 
  text:" personal portfolio",
  link:"#",
  description:"This portfolio website serves as a dynamic showcase of my skills, experiences, and accomplishments, offering a professional platform to highlight my unique talents and attract potential clients, employers, or collaborators."

}]
  return (
    <div className="portfolio_container">
    {imgobj.map((item,index)=>{
      return(
       <div className='portfolio_card' key={index}>
       <a href={item.link} target='_blank'>
        <img src={item.img} alt="projectimg" className='projectimage'/>
        <p className='project_title'>{item.text }</p>
        <p className='project_description'>{item.description}</p>
        </a>
       </div> 
      )
    })}
    </div>
  )
}

export default Portfolio