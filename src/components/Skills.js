import React, { useState } from 'react'

function Skills(props) {
    const [hoveredElement, setHoveredElement] = useState('');
    const [skillEfficiency, setSkillEfficiency] = useState('');
    const [skillSpec, setSkillSpec] = useState("¯\\_(ツ)_/¯");
    const [imgsrc, setImgsrc] = useState("./images/empty_stat.png");
    const [mobilename, setMobileName] = useState();

    const setHover = (e)=>{
        console.log("hover");
        let prevName = '';
        if(e.target.id!==prevName){
            let name = e.target.id;
            prevName = name;
            setImgsrc(`./images/${name}_stat.png`);
        }
    }

    const handleClick = (e)=>{
        e.preventDefault();
        console.log(e.target.className.split(" ")[0])
        console.log(e.target.name);
        setImgsrc(`./images/${e.target.className.split(" ")[0]}_stat.png`);
    }

  return (
    <div className='skills mx-8 mt-16 flex flex-col md:flex-row justify-center' id='skills'>
        <div className={`${props.sticky?"md:my-[200px] my-8":"md:my-[102px] my-8"} md:w-[95%]`}>
            <h1 className='heading font-bold my-5'>SKILLS</h1>
            <div className="technologies hidden md:flex flex-col w-full md:max-w-[750px] p-4 rounded-lg items-center">
                <div className="row flex justify-between md:w-[90%] my-4 md:my-8">
                    <div id='html' className="techIcons html bg-gray-300 rounded-lg flex justify-center items-center mx-1 md:mx-6 px-2 py-2 md:py-4 cursor-pointer hover:scale-125 ease-in duration-200" onMouseOver={setHover}><img className='html md:w-[70%]' src="./images/html-5.png" alt="" /></div>
                    <div id = "css" className="techIcons css bg-gray-300 rounded-lg flex justify-center items-center mx-1 md:mx-6 px-2 py-2 md:py-4 cursor-pointer hover:scale-125 ease-in duration-200" onMouseOver={setHover}><img className='css md:w-[70%]' src="./images/css-3.png" alt="" /></div>
                    <div id ="javascript" className="techIcons javascript bg-gray-300 rounded-lg flex justify-center items-center mx-1 md:mx-6 px-2 py-2 md:py-4 cursor-pointer hover:scale-125 ease-in duration-200" onMouseOver={setHover}><img className='javascript md:w-[70%]' src="./images/js.png" alt="" /></div>
                    <div id ="nodejs" className="techIcons nodejs bg-gray-300 rounded-lg flex justify-center items-center mx-1 md:mx-6 px-2 py-2 md:py-4 cursor-pointer hover:scale-125 ease-in duration-200" onMouseOver={setHover}><img className='nodejs md:w-[70%]' src="./images/nodejs.png" alt="" /></div>
                    <div id ="express" className="techIcons express bg-gray-300 rounded-lg flex justify-center items-center mx-1 md:mx-6 px-2 py-2 md:py-4 cursor-pointer hover:scale-125 ease-in duration-200" onMouseOver={setHover}><img className='express md:w-[70%]' src="./images/express.png" alt="" /></div>
                </div>
                <div className="row flex justify-between md:w-[90%] my-4 md:my-8">
                    <div id ="react" className="techIcons react bg-gray-300 rounded-lg flex justify-center items-center mx-1 md:mx-6 px-2 py-2 md:py-4 cursor-pointer hover:scale-125 ease-in duration-200" onMouseOver={setHover}><img className='react md:w-[70%]' src="./images/react.png" alt="" /></div>
                    <div id ="mongodb" className="techIcons mongodb bg-gray-300 rounded-lg flex justify-center items-center mx-1 md:mx-6 px-2 py-2 md:py-4 cursor-pointer hover:scale-125 ease-in duration-200" onMouseOver={setHover}><img className='mongodb md:w-[70%]' src="./images/mongodb.png" alt="" /></div>
                    <div id ="tailwind" className="techIcons tailwind bg-gray-300 rounded-lg flex justify-center items-center mx-1 md:mx-6 px-2 py-2 md:py-4 cursor-pointer hover:scale-125 ease-in duration-200" onMouseOver={setHover}><img className='tailwind md:w-[70%]' src="./images/tailwind-css.png" alt="" /></div>
                    <div id ="bootstrap" className="techIcons bootstrap bg-gray-300 rounded-lg flex justify-center items-center mx-1 md:mx-6 px-2 py-2 md:py-4 cursor-pointer hover:scale-125 ease-in duration-200" onMouseOver={setHover}><img className='bootstrap md:w-[70%]' src="./images/bootstrap-5-logo-icon.png" alt="" /></div>
                    <div id ="python" className="techIcons python bg-gray-300 rounded-lg flex justify-center items-center mx-1 md:mx-6 px-2 py-2 md:py-4 cursor-pointer hover:scale-125 ease-in duration-200" onMouseOver={setHover}><img className='python md:w-[70%]' src="./images/python.png" alt="" /></div>
                </div>
            </div>
            <div className="technologies md:hidden flex flex-col w-full md:max-w-[750px] p-4 rounded-lg items-center">
                <div className="row flex justify-between md:w-[90%] my-4 md:my-8">
                    <div id='html-mobile' className="html bg-gray-300 rounded-lg flex justify-center items-center mx-1 md:mx-6 px-2 py-2 md:py-4 cursor-pointer hover:scale-125 ease-in duration-200" onClick={handleClick}><img className='html md:w-[70%]' src="./images/html-5.png" alt="" /></div>
                    <div id = "css-mobile" className="css bg-gray-300 rounded-lg flex justify-center items-center mx-1 md:mx-6 px-2 py-2 md:py-4 cursor-pointer hover:scale-125 ease-in duration-200" onClick={handleClick}><img className='css md:w-[70%]' src="./images/css-3.png" alt="" /></div>
                    <div id ="javascript-mobile" className="javascript bg-gray-300 rounded-lg flex justify-center items-center mx-1 md:mx-6 px-2 py-2 md:py-4 cursor-pointer hover:scale-125 ease-in duration-200" onClick={handleClick}><img className='javascript md:w-[70%]' src="./images/js.png" alt="" /></div>
                    <div id ="nodejs-mobile" className="nodejs bg-gray-300 rounded-lg flex justify-center items-center mx-1 md:mx-6 px-2 py-2 md:py-4 cursor-pointer hover:scale-125 ease-in duration-200" onClick={handleClick}><img className='nodejs md:w-[70%]' src="./images/nodejs.png" alt="" /></div>
                    <div id ="express-mobile" className="express bg-gray-300 rounded-lg flex justify-center items-center mx-1 md:mx-6 px-2 py-2 md:py-4 cursor-pointer hover:scale-125 ease-in duration-200" onClick={handleClick}><img className='express md:w-[70%]' src="./images/express.png" alt="" /></div>
                </div>
                <div className="row flex justify-between md:w-[90%] my-4 md:my-8">
                    <div id ="react-mobile" className="react bg-gray-300 rounded-lg flex justify-center items-center mx-1 md:mx-6 px-2 py-2 md:py-4 cursor-pointer hover:scale-125 ease-in duration-200" onClick={handleClick}><img className='react md:w-[70%]' src="./images/react.png" alt="" /></div>
                    <div id ="mongodb-mobile" className="mongodb bg-gray-300 rounded-lg flex justify-center items-center mx-1 md:mx-6 px-2 py-2 md:py-4 cursor-pointer hover:scale-125 ease-in duration-200" onClick={handleClick}><img className='mongodb md:w-[70%]' src="./images/mongodb.png" alt="" /></div>
                    <div id ="tailwind-mobile" className="tailwind bg-gray-300 rounded-lg flex justify-center items-center mx-1 md:mx-6 px-2 py-2 md:py-4 cursor-pointer hover:scale-125 ease-in duration-200" onClick={handleClick}><img className='tailwind md:w-[70%]' src="./images/tailwind-css.png" alt="" /></div>
                    <div id ="bootstrap-mobile" className="bootstrap bg-gray-300 rounded-lg flex justify-center items-center mx-1 md:mx-6 px-2 py-2 md:py-4 cursor-pointer hover:scale-125 ease-in duration-200" onClick={handleClick}><img className='bootstrap md:w-[70%]' src="./images/bootstrap-5-logo-icon.png" alt="" /></div>
                    <div id ="python-mobile" className="python bg-gray-300 rounded-lg flex justify-center items-center mx-1 md:mx-6 px-2 py-2 md:py-4 cursor-pointer hover:scale-125 ease-in duration-200" onClick={handleClick}><img className='python md:w-[70%]' src="./images/python.png" alt="" /></div>
                </div>
            </div>
        </div>
        <div className={`${props.sticky?"md:my-[160px]":""} md:w-[700px]`}>
            <img id='man-inf-pc' className='man-inf-pc scale-125 md:scale-125' src={imgsrc} alt=""/>
        </div>
    </div>
  )
}

export default Skills
