import React, { useEffect} from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar(props) {
  useEffect(()=>{
    // console.log(props.region)
    const interval = setInterval(()=>{
      // console.log(props.projectsTop)
      if(window.scrollY < props.skillsTop-200){
        props.setRegion('#home')
        document.title = "Swaparup Mukherjee - Home"
        props.setSticky(false)
      }else if(window.scrollY >= props.skillsTop-200 && window.scrollY < props.projectsTop-110){
        props.setRegion('#skills')
        document.title = "Swaparup Mukherjee - Skills"
        props.setSticky(true)
      }else if(window.scrollY >= props.projectsTop-110 && window.scrollY < props.aboutTop-120){
        props.setRegion('#projects')
        document.title = "Swaparup Mukherjee - Projects"
        props.setSticky(true)
      }else if(window.scrollY >= props.aboutTop-120){
        props.setRegion('#about')
        document.title = "Swaparup Mukherjee - About"
        props.setSticky(true)
      }
      else{
        props.setRegion('')
      }
    }, 100)
    return () => clearInterval(interval);
  })
  return (
    <nav id='navbar' className={`navbar hidden md:flex ${props.sticky?"fixed top-0":""} justify-center items-center w-full h-[100px]`}>
        <ul className='flex justify-between w-[60%]'>
            <li className=''>
              <Link smooth className={`navbarItems ${props.region ==='#home'?'active text-color3':''} text-color2 font-semibold text-lg`} name="home" to="#home" >
                Home
                <div className='underlinehover'></div>
              </Link>
            </li>
            <li className=''>
              <Link smooth className={`navbarItems ${props.region ==='#skills'?'active text-color3':''} text-color2 font-semibold text-lg`} name="skills" to="#skills">
                Skills
                <div className='underlinehover'></div>
              </Link>
            </li>
            <li className=''>
              <Link smooth className={`navbarItems ${props.region ==='#projects'?'active text-color3':''} text-color2 font-semibold text-lg`} name="projects" to="#projects">
                Projects
                <div className='underlinehover'></div>
              </Link>
            </li>
            <li className=''>
              <Link smooth className={`navbarItems ${props.region ==='#about'?'active text-color3':''} text-color2 font-semibold text-lg`} name="about" to="#about">
                About
                <div className='underlinehover'></div>
              </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar