import About from './About';
import Navbar from './Navbar';
import Skillset from './Skillset';
import Projects from './Projects';
import Contact from './Contact';
import History from './History';

const Home = () => {
    return (
        <>
            <div className='nav-header'>
                <h1 className='nav-title'>AroonSalotra.com</h1>
                <Navbar />
            </div>

            <div className='container-main'>

                <About />

                <History />
                
                <Skillset />

                <Projects />

                <Contact />
            </div>
        </>
    );
};

export default Home;