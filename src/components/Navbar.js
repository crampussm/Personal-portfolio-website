import React, { useEffect} from 'react'
import { HashLink as Link } from 'react-router-hash-link';

function Navbar(props) {
  useEffect(()=>{
    // console.log(props.region)
    const interval = setInterval(()=>{
      // console.log(props.projectsTop)
      if(window.scrollY < props.skillsTop-100){
        props.setRegion('#home')
        document.title = "Swaparup Mukherjee - Home"
        props.setSticky(false)
      }else if(window.scrollY >= props.skillsTop-100 && window.scrollY < props.projectsTop-110){
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
    <nav id='navbar' className={`navbar ${props.sticky?"fixed":""}`} style={{justifyContent: "center"}}>
        <ul style={{display: "flex", margin: "25px 4px"}}>
            <li style={{padding: "3px 120px"}}>
              <Link smooth className={`navbarItems ${props.region ==='#home'?'active':''}`} name="home" to="#home" >
                Home
                <div className='underlinehover'></div>
              </Link>
            </li>
            <li style={{padding: "3px 120px"}}>
              <Link smooth className={`navbarItems ${props.region ==='#skills'?'active':''}`} name="skills" to="#skills">
                Skills
                <div className='underlinehover'></div>
              </Link>
            </li>
            <li style={{padding: "3px 120px"}}>
              <Link smooth className={`navbarItems ${props.region ==='#projects'?'active':''}`} name="projects" to="#projects">
                Projects
                <div className='underlinehover'></div>
              </Link>
            </li>
            <li style={{padding: "3px 120px"}}>
              <Link smooth className={`navbarItems ${props.region ==='#about'?'active':''}`} name="about" to="#about">
                About
                <div className='underlinehover'></div>
              </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar