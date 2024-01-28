import React from 'react'

function Home(props) {
  return (
    <div className='intro' id='home-sec'>
        <h1 className="name">SWAPARUP MUKHERJEE</h1>
        <div style={{margin: "-15px 0px", width: "80%"}}>
            <p className="text" style={{fontSize: "1.3rem", fontWeight: "600"}}>Passionate Web-developer and Python developer.</p>
        </div>
        <div style={{margin: "30px 0px"}}>
            <p className="text"  style={{fontSize: "1.12rem", fontWeight: "600"}}>seeking for freelancing and internships oppertunities</p>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
            <button className="button" onClick={()=>{props.scrollToSection(props.skillsTop)}}>SEE MY WORK &#10230;</button>
        </div>
    </div>
  )
}

export default Home