import headshot from "../assets/headshot.jpg"
import { FaLinkedin, FaPhone } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

const About = ({ ref }) => {
    return (
        <div ref={ref} className="container-about">
            <div className="content-about">
                <h2 style={{border: "none"}}>Aroon Salotra</h2>
                <h3>Full Stack Developer</h3>

                <img className="img-about" src={headshot} />

                <ul className="about-icons">
                    <li><FaLinkedin className="icon-s" /></li>
                    <li><FaPhone className="icon-s" /></li>
                    <li><AiFillMail className="icon-s" /></li>
                </ul>

                <button className="btn-about">
                    Resume
                </button>
            </div>
        </div>
    );
};

export default About;