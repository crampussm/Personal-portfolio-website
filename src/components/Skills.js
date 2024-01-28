import React, { useState } from 'react'

function Skills(props) {
    const [hoveredElement, setHoveredElement] = useState('')
    const [skillEfficiency, setSkillEfficiency] = useState('')
    const [skillSpec, setSkillSpec] = useState("¯\\_(ツ)_/¯")
    const setHover = (e)=>{
        let name = e.target.className.split(" ").slice(-1)[0]
        let efficiency = {
            "html": "90%",
            "css": "70%",
            "javascript": "85%",
            "nodejs": "75%",
            "express": "80%",
            "react": "60%",
            "mongodb": "85%",
            "tailwind": "70%",
            "bootstrap": "90%",
            "python": "60%"
        }
        let offsetValue = {
            "html": "340",
            "css": "360",
            "javascript": "345",
            "nodejs": "355",
            "express": "350",
            "react": "370",
            "mongodb": "345",
            "tailwind": "360",
            "bootstrap": "340",
            "python": "370"
        }
        let specification = {
            "html": "EXPERT",
            "css": "INTERMEDIATE",
            "javascript": "EXPERIENCED",
            "nodejs": "INTERMEDIATE",
            "express": "EXPERIENCED",
            "react": "INTERMEDIATE",
            "mongodb": "EXPERIENCED",
            "tailwind": "INTERMEDIATE",
            "bootstrap": "EXPERT",
            "python": "INTERMEDIATE"
        }
        setSkillSpec(specification[name])
        setSkillEfficiency(efficiency[name])
        setHoveredElement(name)
        document.documentElement.style.setProperty("--offset-value", offsetValue[name]); 
    }
  return (
    <div className='skills' id='skills'>
        <div className={`${props.sticky?"skillItems-with-fixed":"skillItems"}`}>
            <h1 className='heading'>SKILLS</h1>
            <div className="technologies">
                <div className="row" style={{display: 'flex', flexDirection: 'row'}}>
                    <div className="techIcons html" onMouseOver={(e)=>{setHover(e)}}><img className='html' src="./images/html-5.png" alt="" /></div>
                    <div className="techIcons css" onMouseOver={(e)=>{setHover(e)}}><img className='css' src="./images/css-3.png" alt="" /></div>
                    <div className="techIcons javascript" onMouseOver={(e)=>{setHover(e)}}><img className='javascript' src="./images/js.png" alt="" /></div>
                    <div className="techIcons nodejs" onMouseOver={(e)=>{setHover(e)}}><img className='nodejs' src="./images/nodejs.png" alt="" /></div>
                    <div className="techIcons express" onMouseOver={(e)=>{setHover(e)}}><img className='express' src="./images/express.png" alt="" /></div>
                </div>
                <div className="row" style={{display: 'flex', flexDirection: 'row'}}>
                    <div className="techIcons react" onMouseOver={(e)=>{setHover(e)}}><img className='react' src="./images/react.png" alt="" /></div>
                    <div className="techIcons mongodb" onMouseOver={(e)=>{setHover(e)}}><img className='mongodb' src="./images/mongodb.png" alt="" /></div>
                    <div className="techIcons tailwind" onMouseOver={(e)=>{setHover(e)}}><img className='tailwind' src="./images/tailwind-css.png" alt="" /></div>
                    <div className="techIcons bootstrap" onMouseOver={(e)=>{setHover(e)}}><img className='bootstrap' src="./images/bootstrap-5-logo-icon.png" alt="" /></div>
                    <div className="techIcons python" onMouseOver={(e)=>{setHover(e)}}><img className='python' src="./images/python.png" alt="" /></div>
                </div>
            </div>
        </div>
        <div className={`${props.sticky?"info-with-fixed":"info"}`}>
            <div className="show-stat">
                $~Hover any skill to see stats<span class="blinking-cursor">|</span>
                <div className="stats">
                    <div style={{display: 'flex'}}>
                        <h5 style={{fontSize: "0.8rem", marginTop: 5}}>【/】{hoveredElement.toUpperCase()}</h5>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <h5 style={{fontSize: "0.85rem", margin: "-10px 2px", maxWidth: "90px"}}>
                            <div>❰/❱❰/❱❰/❱❰/❱</div>
                            {skillSpec}
                        </h5>
                        <div className="progress-cirle">
                            <div className="outer">
                                <div className="inner">
                                    <h5 style={{fontSize: "0.85rem", marginLeft: "10px"}}>{skillEfficiency}</h5>
                                </div>
                            </div>
                            <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width={"50px"} height={"50px"}>
                                <defs>
                                    <linearGradient id='Gradientcolor'>
                                        <stop offset={"0%"} stopColor='#009a5a'/>
                                        <stop offset={"100%"} stopColor='#5fffbc'/>
                                    </linearGradient>
                                </defs>
                                <circle cx={24.6} cy={24.6} r={21} strokeLinecap='round'/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <img className='man-inf-pc' src="./images/man_inf_of_pc.png" alt=""/>
        </div>
    </div>
  )
}

export default Skills