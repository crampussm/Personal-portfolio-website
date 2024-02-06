import React from 'react'

function Projects() {
  return (
    <div className='projects' id='projects'>
        <h1 className='heading' id='project-heading'>PROJECTS</h1>
        <div className="project-showcase">
            <div className="project-image">
                <img src="./images/ppw.png" alt="" width={"100%"} style={{cursor: "pointer"}}/>
            </div>
            <div  className="divider"></div>
            <div className="project-info">
                <h2 style={{fontSize: "2rem", color: "#50C594", margin: "2px 0px"}}>Portfolio website</h2>
                <p className='text' style={{margin: "40px 0px"}}>Explore my portfolio crafted with React JS, showcasing my web development expertise. Discover my skills, browse through projects, and witness a fusion of creativity and functionality in every line of code.</p>
                <div style={{backgroundColor: "#8EA0BA", height: "1px", width: "100%"}}></div>
                <p className='text' style={{margin: "15px 0px"}}>React</p>
            </div>
        </div>
        <div className="project-showcase">
            <div className="project-info" style={{maxWidth: "498px"}} id='price-tracker-bot-pc-info'>
                <h2 style={{fontSize: "2rem", color: "#50C594", margin: "4px 0px"}}>pricetracker Bot</h2>
                <p className='text' style={{margin: "40px 0px"}}>ntroducing my Python-powered Telegram Price Tracker Bot, revolutionizing online shopping. Leveraging web scraping, it empowers buyers with real-time insights, ensuring informed decisions on optimal purchases. Your guide to buying right, every time</p>
                <div style={{backgroundColor: "#8EA0BA", height: "1px", width: "100%", marginTop: "150px"}}></div>
                <p className='text' style={{margin: "15px 0px"}}>Python</p>
            </div>
            <div  className="divider" style={{height: "450px"}}></div>
            <div className="project-image">
                <img src="./images/priceTracker_bot.png" alt="" width={"100%"} style={{cursor: "pointer"}}/>
            </div>
            <div className="project-info" id='price-tracker-bot-mobile-info'>
                <h2 style={{fontSize: "2rem", color: "#50C594", margin: "4px 0px"}}>pricetracker Bot</h2>
                <p className='text' style={{margin: "90px 0px"}}>Introducing my Python-powered Telegram Price Tracker Bot, revolutionizing online shopping. Leveraging web scraping, it empowers buyers with real-time insights, ensuring informed decisions on optimal purchases. Your guide to buying right, every time.</p>
                <div style={{backgroundColor: "#8EA0BA", height: "1px", width: "100%"}}></div>
                <p className='text' style={{margin: "15px 0px"}}>Python</p>
            </div>
        </div>
    </div>
  )
}

export default Projects
