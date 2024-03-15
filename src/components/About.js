import React, { useState } from 'react'
import Alert from './Alert';

function About() {
  const [data, setData] = useState({name: "", email: "", subject: "", body: ""});
  const [alert, setAlert] = useState({type: "", message: "", show: true});
  const [isAlert, setIsAlert] = useState(false);
  const onChange = (e)=>{
    setData({...data, [e.target.name]: e.target.value});
  }
  const showAlert = (type, message)=>{
    setIsAlert(true);
    setAlert({type: type, message: message, show: true});
    setTimeout(()=>{
      setAlert({type: "", message: "", show: false});
      setAlert(false);
    }, 6000)
  }
  const onSubmit = async(event)=>{
    event.preventDefault();
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    formData.append("access_key", "2c8bdb3a-d313-44a2-b743-c7132579c93e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log(res)
      document.documentElement.style.setProperty("--alert-color", "#50C594"); 
      showAlert("SUCCESS", res.message);
      setData({name: "", email: "", subject: "", body: ""})
    }else{
      console.log(res)
      document.documentElement.style.setProperty("--alert-color", "red");
      showAlert("ERROR", res.message);
    }
  }
  return (
    <>
    <div className='about mx-8 mt-16' id='about'>
      <div className='about-heading flex justify-between'>
        <h1 className='heading my-[10px] md:mx-[30px] font-bold'>ABOUT</h1>
        {
          isAlert &&
          <Alert alert={alert}/>
        }
      </div>
      <div className='flex justify-center my-16'>
        <div className='about-main w-fit flex-col md:flex-row flex md:w-[80%] justify-center'>
          <div className="about-me flex justify-center my-10">
            <div className="about-info">
              <h2 className='text-color2 text-2xl font-bold'>SWAPARUP MUKHERJEE</h2>
              <p className='text-[1rem] text-color2 my-3'><b>B.Tech</b> undergrad at <b>NIT Agartala</b></p>
              <p className='text-color2 mx-w-[80%] md:max-w-[65%] my-6'>I'm a tech and coding enthusiast. I started coding at the of 16 and still learning atleast one new thing everyday. I'm very sincere and dedicated towards my work. Take a look at my projects on github. I'm planning to add more projects on some innovative ideas.</p>
              <form method='get' action="swaparup_mukherjee_resume.pdf">
                <button className="bg-color3 text-white font-semibold text-sm px-4 py-2 border-2 border-color3 hover:border-color2 hover:bg-color1 hover:text-color2 my-4">Download Resume</button>
              </form>
            </div>
          </div>
          <div className="contact-me">
            <h2 className='text-color3 font-bold text-4xl mt-[1px] mb-5'>Contact Me</h2>
            <div className="form">
              <form className='flex flex-col' onSubmit={onSubmit}>
                <label className="form-label text-color2 mx-[10px] mt-2" htmlFor="form-name">Your Name</label>
                <input className='form-controll bg-color1 p-[5px] w-[95%] md:w-[500px] m-[10px] border-2 border-gray-800 text-white' name='name' type="text" id='form-name' value={data.name} onChange={onChange}/>
                <label className="form-label text-color2 mx-[10px] mt-2" htmlFor="form-email">Your Email Address</label>
                <input className='form-controll bg-color1 p-[5px] w-[95%] md:w-[500px] m-[10px] border-2 border-gray-800 text-white' name='email' type="email" id='form-email' value={data.email} onChange={onChange}/>
                <label className="form-label text-color2 mx-[10px] mt-2" htmlFor="form-subject">Subject</label>
                <input className='form-controll bg-color1 p-[5px] w-[95%] md:w-[500px] m-[10px] border-2 border-gray-800 text-white' name='subject' type="text" id='form-subject' value={data.subject} onChange={onChange}/>
                <label className="form-label text-color2 mx-[10px] mt-2" htmlFor="form-body">Your Message</label>
                <input className='form-controll bg-color1 p-[5px] w-[95%] md:w-[500px] m-[10px] border-2 border-gray-800 text-white' name='body' type="text" id='form-body' value={data.body} onChange={onChange}/>
                <button className='button px-6 py-2 bg-color3 text-white text-sm font-bold w-[40%] md:w-[22%] ml-3 mt-4 border-2 border-color3 hover:border-color2 hover:text-color2 hover:bg-color1'>SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
