import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';

function Navbarhome(props) {
  const [isHamMenu, setIsHamMenu] = useState(false);
  const handleHamMenu = (e)=>{
    e.preventDefault();
    if(isHamMenu){
      setIsHamMenu(false);
    }else{
      setIsHamMenu(true);
    }
  }
  return (
    <>
      <nav className='navbar flex justify-between w-full items-center my-2 h-[60px]' id='home'>
        <div className="logo w-[50%] md:w-[20%] flex justify-center items-center">
            <img className='logoicon w-[20%] md:w-[15%] ' src="../images/logo.png" alt="" />
            <Link to='/'> <h2 className='text text-color2 text-2xl font-bold'>SWAPARUP</h2></Link>  
        </div>
        <div className="socials w-[20%] flex justify-center items-center">
            <a className='hidden md:flex justify-center w-[10%] mx-4' href="mailto.swaparup36@gmail.com"><img className='socialIcons' src="../images/gmail.png" alt=""/></a>
            <a className='hidden md:flex justify-center w-[10%] mx-4' href="www.linkedin.com/in/swaparup-mukherjee-508001280"><img className='socialIcons' src="../images/linkedin.png" alt=""/></a>
            <a className='hidden md:flex justify-center w-[10%] mx-4' href="https://github.com/crampussm"><img className='socialIcons' src="../images/github.png" alt="" /></a>
            <a className='md:hidden flex justify-center w-[30%] mx-4' href=""><img className='socialIcons' src="../images/hamburger.png" alt="" id='hamburger' onClick={handleHamMenu}/></a>
        </div>
      </nav>
      {
        isHamMenu &&
        <div className="hamburger-navbar fixed top-0 right-0 h-[100vh] bg-black w-[60%]" id='hamburger-navbar'>
          <div className="flex justify-start mx-3 my-4">
              <span className='text-color2 text-3xl font-bold' onClick={handleHamMenu}>X</span>
          </div>
          <div className="hamburger-nav-items flex justify-center items-center h-[70vh]">
              <ul>
                  <li className='mt-10'>
                      <Link smooth className={`navbarItems ${props.region ==='#home'?'active':''} text-color2 text-xl font-semibold`} name="home" to="#home" >
                          Home
                      </Link>
                  </li>
                  <li className='mt-10'>
                      <Link smooth className={`navbarItems ${props.region ==='#skills'?'active':''} text-color2 text-xl font-semibold`} name="skills" to="#skills">
                          Skills
                      </Link>
                  </li>
                  <li className='mt-10'>
                      <Link smooth className={`navbarItems ${props.region ==='#projects'?'active':''} text-color2 text-xl font-semibold`} name="projects" to="#projects">
                          Projects
                      </Link>
                  </li>
                  <li className='mt-10'>
                      <Link smooth className={`navbarItems ${props.region ==='#about'?'active':''} text-color2 text-xl font-semibold`} name="about" to="#about">
                          About
                      </Link>
                  </li>
              </ul>
          </div>
        </div>
      }
    </>
    
  )
}

export default Navbarhome