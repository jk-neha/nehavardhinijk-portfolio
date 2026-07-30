import Navbar from "./components/Navbar";

import AuroraBackground from "./components/AuroraBackground";
import FloatingParticles from "./components/FloatingParticles";
import MouseGlow from "./components/MouseGlow";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Journey from "./sections/Journey";
import Education from "./sections/Education";
import Contact  from "./sections/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";


function App(){

  return(
<>
    <ScrollProgress/>

    <Navbar/>

    <main>

        <Hero/>

        <About/>

        <Projects/>

        <Skills/>

        <Education/>

        <Experience/>

        <Contact/>

    </main>

    <Footer/>

    <BackToTop/>

</>

  )

}

export default App