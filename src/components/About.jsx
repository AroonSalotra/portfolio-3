import headshot from "../assets/headshot.jpg"
import { FaLinkedin, FaPhone } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

const About = () => {
    return (
        <div className="container-about">
            <h2>Aroon Salotra</h2>
            <h3>Full Stack Developer</h3>

            <img className="img-about" src={headshot} />

            {/* <p className="text-about">
                Self-taught UK based developer - I build applications focusing on responsiveness & functionality.
            </p> */}

            <ul className="about-icons">
                <li><FaLinkedin className="icon-s" /></li>
                <li><FaPhone className="icon-s" /></li>
                <li><AiFillMail className="icon-s" /></li>
            </ul>


            {/* <div className="container-btn">
                <button className="btn">Projects</button>
                <button className="btn">Resume</button>
            </div> */}

            <button className="btn-about">
                Resume
            </button>
        </div>
    );
};

export default About;