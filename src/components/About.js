import React, { useState } from 'react'
import Alert from './Alert';

function About() {
  const [data, setData] = useState({name: "", email: "", subject: "", body: ""})
  const [alert, setAlert] = useState({type: "", message: "", show: true})
  const onChange = (e)=>{
    setData({...data, [e.target.name]: e.target.value});
  }
  const showAlert = (type, message)=>{
    document.getElementById("alert").classList.add("alert-box-active");
    setAlert({type: type, message: message, show: true});
    setTimeout(()=>{
      setAlert({type: "", message: "", show: false});
      document.getElementById("alert").classList.remove("alert-box-active");
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
    <div className='about' id='about'>
      <div className='about-heading'>
        <h1 className='heading' style={{ margin: "10px 30px" }}>ABOUT</h1>
        <Alert alert={alert}/>
      </div>
      <div className='about-main'>
        <div className="about-me">
          <div className="about-info">
            <h2>SWAPARUP MUKHERJEE</h2>
            <p style={{ fontSize: "1rem" }}><b>B.Tech</b> undergrad at <b>NIT Agartala</b></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quibusdam neque suscipit doloribus laborum quisquam ratione animi aut dolores quos.</p>
          </div>
          <div className="about-mypic">

          </div>
        </div>
        <div className="contact-me">
          <h2 style={{color: "#50C594", fontSize: "2.5rem", marginTop: "1px"}}>Contact Me</h2>
          <div className="form">
            <form onSubmit={onSubmit} style={{display: 'flex', flexDirection: 'column'}}>
              <label className="form-label" htmlFor="form-name">Your Name</label>
              <input className='form-controll' name='name' type="text" id='form-name' value={data.name} onChange={onChange}/>
              <label className="form-label" htmlFor="form-email">Your Email Address</label>
              <input className='form-controll' name='email' type="email" id='form-email' value={data.email} onChange={onChange}/>
              <label className="form-label" htmlFor="form-subject">Subject</label>
              <input className='form-controll' name='subject' type="text" id='form-subject' value={data.subject} onChange={onChange}/>
              <label className="form-label" htmlFor="form-body">Your Message</label>
              <input className='form-controll' name='body' type="text" id='form-body' value={data.body} onChange={onChange}/>
              <button className='button' style={{margin: "20px 10px", width: "20%"}}>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About