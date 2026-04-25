import headshot from "../assets/headshot.jpg"
import { FaLinkedin, FaPhone } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { useState } from "react";

const About = ({ ref }) => {

    const [showMsg, setShowMsg] = useState(null);

    const handleClick = (target) => {

        let copyText = null;
        if (target == "phone") {
            copyText = "07397377081"
        }

        if (target == "email") {
            copyText = "aroonsalotra@gmail.com"
        }

        navigator.clipboard.writeText(copyText);

        setShowMsg(true);
        setTimeout(() => {
            setShowMsg(false);
        }, 1200);
    }

    return (
        <div ref={ref} className="container-about">
            <div className="content-about">
                <h2 style={{ border: "none" }}>Aroon Salotra</h2>
                <h3>Full Stack Developer</h3>

                <img className="img-about" src={headshot} />

                <ul className="about-icons">
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/aroon-salotra/">
                            <FaLinkedin className="icon-s clickable" />
                        </a>
                    </li>
                    <li>
                        <FaPhone onClick={() => handleClick("phone")} className="icon-s clickable" />
                    </li>
                    <li>
                        <AiFillMail onClick={() => handleClick("email")} className="icon-s clickable" />
                    </li>
                </ul>

                <p className={`msg ${showMsg ? 'show' : 'hide'}`}>
                    Copied to clipboard
                </p>

                <a target="_blank" href="https://drive.google.com/file/d/1mhXvuFkDhHA70f8cuKfPf08738qbkrGA/view?usp=sharing" className="btn-about">
                    Resume
                </a>
            </div>
        </div>
    );
};

export default About;