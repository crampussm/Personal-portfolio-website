import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

function Navbarhome(props) {
  return (
    <nav className='navbar' id='home'>
        <div className="logo">  
            <img className='logoicon' src="./images/logo.png" alt="" />
            <Link to='/'> <h2 className='text'>SWAPARUP</h2></Link>  
        </div>
        <div className="socials">
            <a href="mailto:swaparup36@gmail.com"><img className='socialIcons' src="./images/gmail.png" alt="" /></a>
            <a href="https://www.linkedin.com/in/swaparup-mukherjee-508001280"><img className='socialIcons' src="./images/linkedin.png" alt=""/></a>
            <a href="https://github.com/crampussm"><img className='socialIcons' src="./images/github.png" alt="" /></a>
            <img className='socialIcons' src="./images/hamburger.png" alt="" id='hamburger' onClick={props.manageHamNav}/>
        </div>
    </nav>
  )
}

export default Navbarhome