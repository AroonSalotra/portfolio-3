import './App.css'
import About from './components/About';
import Navbar from './components/Navbar';
import Skillset from './components/Skillset';
import Projects from './components/Projects';
import Contact from './components/Contact';
import History from './components/History';
import Footer from './components/Footer';
import { useRef } from 'react';


function App() {

  const projectRef = useRef(null);
  const homeRef = useRef(null);
  const timelineRef = useRef(null);

  return (
    <>
      <Navbar
        homeRef={homeRef}
        projectRef={projectRef}
        timelineRef={timelineRef}
      />

      <About />

      <Projects
        ref={projectRef}
      />

      <History
        ref={timelineRef}
      />

      <Skillset />

      <Footer />
    </>
  )
}

export default App;