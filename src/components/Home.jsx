import About from './About';
import Navbar from './Navbar';
import Skillset from './Skillset';
import Projects from './Projects';
import Contact from './Contact';
import History from './History';
import Footer from './Footer';

const Home = () => {
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
    );
};

export default Home;