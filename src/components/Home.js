import React from 'react'

function Home(props) {
  return (
    <div className='intro flex flex-col justify-center items-center' id='home-sec'>
        <div className='md:my-52 my-48 w-[75%] md:w-fit'>
          <h1 className="name text-white text-2xl md:text-4xl font-bold">SWAPARUP MUKHERJEE</h1>
          <div className='md:mt-4 md:w-[80%] w-[90%] mt-2'>
              <p className="text text-color2 font-semibold md:text-xl">Passionate Web-developer and Python developer.</p>
          </div>
          <div className='md:mt-4 mt-2'>
              <p className="text text-color2 text-sm md:text-lg">seeking for freelancing and internships oppertunities</p>
          </div>
          <div className='flex justify-center md:mt-12 mt-6'>
              <button className="button text-sm bg-color3 px-2 md:px-4 text-white font-bold py-2 hover:bg-color1 border-2 border-color3 hover:border-color2 hover:text-color2" onClick={()=>{props.scrollToSection(props.skillsTop)}}>SEE MY WORK &#10230;</button>
          </div>
        </div>
    </div>
  )
}

export default Home