import About from './About';
import Navbar from './Navbar';
import Skillset from './Skillset';
import Projects from './Projects';

const Home = () => {
    return (
        <>
            <div className='nav-header'>
                <h1 className='nav-title'>AroonSalotra.com</h1>
                <Navbar />
            </div>

            <About />

            <Skillset />

            <Projects />
        </>
    );
};

export default Home;