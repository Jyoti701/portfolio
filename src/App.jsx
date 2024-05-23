import Sideheader from './Sideheader'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import Errorpage from './Navigation__component/Errorpage'
import About from './Navigation__component/About'
import Service from './Navigation__component/Service'
import Contact from './Navigation__component/Contact'
import Portfolio from './Navigation__component/Portfolio'
import { Outlet } from 'react-router-dom'
import Home from './Navigation__component/Home'
import { IoMdMenu } from "react-icons/io";
export const approute=createBrowserRouter([
  {
path:'/',
element:<App/>,
children:([
  {
    path:'/',
    element:<Home/>
   
    },
  {
    path:'/about',
    element:<About/>,
   
    },
    {
      path:'/services',
      element:<Service/>,
      
      },
      {
        path:'/contact',
        element:<Contact/>,
      
        },
        {
          path:'/portfolio',
          element:<Portfolio/>,
        
          },
]),
errorElement:<Errorpage/>
},

])
function App() {
  return(
    <div className='app_container'>
    <Sideheader/>
    <IoMdMenu/>
    <Outlet/>
    
    </div>
  )
}

export default App
