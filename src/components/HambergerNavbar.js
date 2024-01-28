import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

function HambergerNavbar(props) {

  return (
    <>
        <div className="hamburger-navbar" id='hamburger-navbar' hidden>
            <div className="collapse">
                <span onClick={props.manageHamNav}>&#10006;</span>
            </div>
            <div className="hamburger-nav-items">
                <ul>
                    <li>
                        <Link smooth className={`navbarItems ${props.region ==='#home'?'active':''}`} name="home" to="#home"  style={{fontSize: "3rem"}}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link smooth className={`navbarItems ${props.region ==='#skills'?'active':''}`} name="skills" to="#skills" style={{fontSize: "3rem"}}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link smooth className={`navbarItems ${props.region ==='#projects'?'active':''}`} name="projects" to="#projects" style={{fontSize: "3rem"}}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link smooth className={`navbarItems ${props.region ==='#about'?'active':''}`} name="about" to="#about" style={{fontSize: "3rem"}}>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default HambergerNavbar