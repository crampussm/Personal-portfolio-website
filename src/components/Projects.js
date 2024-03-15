import React from 'react';

function Projects() {
  return (
    <div className='projects mx-8 mt-16' id='projects'>
        <h1 className='heading font-bold my-5' id='project-heading'>PROJECTS</h1>
        <div className='flex flex-col justify-center items-center'>
            <div className="project-showcase flex md:flex-row flex-col-reverse justify-center w-[95%] md:w-[80%] my-20">
                <div className="project-image flex justify-end">
                    <a className='flex w-full md:w-[85%]' href="https://github.com/crampussm/swaparup_mukherjee"><img className='w-full cursor-pointer' src="./images/ppw.png" alt="" width={"100%"} style={{boxShadow: "0px 0px 30px #00844D"}}/></a>
                </div>
                <div  className="divider hidden md:flex bg-color3 h-[270px] w-[2px] mx-[40px]"></div>
                <div className="project-info">
                    <h2 className='md:text-4xl text-3xl text-color3 my-10 md:my-[2px] font-bold'>Portfolio website</h2>
                    <p className='text my-[40px] text-color2'>Explore my portfolio crafted with React JS, showcasing my web development expertise. Discover my skills, browse through projects, and witness a fusion of creativity and functionality in every line of code.</p>
                    <div className='bg-color2 h-[1px] w-full'></div>
                    <p className='text my-[15px] text-color2'>React</p>
                </div>
            </div>
            <div className="project-showcase flex md:flex-row flex-col justify-center w-[95%] md:w-[80%] my-20">
                <div className="project-info max-w-[498px]" id='price-tracker-bot-pc-info'>
                    <h2 className='md:text-4xl text-3xl text-color3 md:my-[4px] font-bold'>pricetracker Bot</h2>
                    <p className='text my-[40px] md:my-[70px] text-color2'>Introducing my Python-powered Telegram Price Tracker Bot, revolutionizing online shopping. Leveraging web scraping, it empowers buyers with real-time insights, ensuring informed decisions on optimal purchases. Your guide to buying right, every time</p>
                    <div className='bg-color2 h-[1px] w-full mt-0 md:mt-[150px]'></div>
                    <p className='text my-[15px] text-color2'>Python</p>
                </div>
                <div  className="divider hidden md:flex h-[480px] bg-color3 w-[2px] mx-[40px]"></div>
                <div className="project-image flex justify-end md:w-[42%]">
                    <a className='flex ' href="https://github.com/crampussm/price_tracker_bot"><img className='cursor-pointer' src="./images/priceTracker_bot.png" alt="" width={"100%"} style={{boxShadow: "0px 0px 30px #00844D"}}/></a>
                </div>
                {/* <div className="project-info" id='price-tracker-bot-mobile-info'>
                    <h2 style={{fontSize: "2rem", color: "#50C594", margin: "4px 0px"}}>pricetracker Bot</h2>
                    <p className='text' style={{margin: "90px 0px"}}>Introducing my Python-powered Telegram Price Tracker Bot, revolutionizing online shopping. Leveraging web scraping, it empowers buyers with real-time insights, ensuring informed decisions on optimal purchases. Your guide to buying right, every time.</p>
                    <div style={{backgroundColor: "#8EA0BA", height: "1px", width: "100%"}}></div>
                    <p className='text' style={{margin: "15px 0px"}}>Python</p>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Projects
