import './App.css'
import About from './Components/About';
import Navbar from './Components/Navbar';
import Skillset from './Components/Skillset';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import History from './Components/History';
import Footer from './Components/Footer';


function App() {

  return (
    <>
      <div className='nav-header'>
        <h1 className='nav-title'>AroonSalotra.com</h1>
        <Navbar />
      </div>


      <About />

      <History />


      {/* <div className='section'> */}
      <Projects />
      {/* </div> */}

      <Skillset />


      {/* <Contact /> */}

      <Footer />
    </>
  )
}

export default App
