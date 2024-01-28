import { useEffect, useState} from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Navbarhome from './components/Navbarhome';
import Skills from './components/Skills';
import PropertiesState from './context/propertiesState';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import HambergerNavbar from './components/HambergerNavbar';

function App() {
  const [sticky, setSticky] = useState(false)
  const [region, setRegion] = useState('')
  const [skillsTop, setSkillsTop] = useState(0)
  const [projectsTop, setProjectsTop] = useState(0)
  const [aboutTop, setAboutTop] = useState(0)
  const [hamNav, setHamNav] = useState(false)
  const manageHamNav = ()=>{
    const hamburgerNav = document.getElementById("hamburger-navbar");
    if(hamNav){
      hamburgerNav.hidden = true;
      setHamNav(false)
    }else{
      hamburgerNav.hidden = false;
      setHamNav(true)
    }
  }
  useEffect(()=>{
    setSkillsTop(document.getElementById('skills').offsetTop);
    setProjectsTop(document.getElementById('projects').offsetTop);
    setAboutTop(document.getElementById('about').offsetTop)
  }, [])
  const scrollToSection = (pos)=>{
    window.scrollTo({
      top: pos,
      behavior: 'smooth'
    });
  }
  return (
    <>
      <PropertiesState>
        <Navbarhome manageHamNav={manageHamNav}/>
        <Home scrollToSection={scrollToSection} skillsTop={skillsTop} region={region} setRegion={setRegion}/>
        <Navbar skillsTop={skillsTop} region={region} setRegion={setRegion} sticky={sticky} setSticky={setSticky} projectsTop={projectsTop} aboutTop={aboutTop}/>
        <Skills sticky={sticky}/>
        <Projects/>
        <About/>
        <Footer/>
        {window.innerWidth<=1104} && <HambergerNavbar manageHamNav={manageHamNav}/>
      </PropertiesState>
    </>
  );
}

export default App;
