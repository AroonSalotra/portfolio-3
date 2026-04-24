import './App.css'
import About from './Components/About';
import Navbar from './Components/Navbar';
import Skillset from './Components/Skillset';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import History from './Components/History';
import Footer from './Components/Footer';
import { useRef } from 'react';


function App() {

  const projectRef = useRef(null);
  const homeRef = useRef(null);
  const timelineRef = useRef(null);

  return (
    <>
      <div className='nav-header' ref={homeRef}>
        <h1 className='nav-title'>AroonSalotra.com</h1>
        <Navbar homeRef={homeRef} projectRef={projectRef} timelineRef={timelineRef} />
      </div>


      <About />

      <History ref={timelineRef} />

      <Projects ref={projectRef} />

      <Skillset />

      <Footer />
    </>
  )
}

export default App
