import headshot from "../assets/headshot.jpg"
import { FaLinkedin, FaPhone } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { useState } from "react";

const About = ({ ref }) => {

    const [showMsg, setShowMsg] = useState(null);

    const handleClick = (target) => {
        const data = {
            phone: "07397377081",
            email: "aroonsalotra@gmail.com"
        };

        const text = data[target];

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text);
        } else {
            // fallback for older mobile browsers
            const textarea = document.createElement("textarea");
            textarea.value = text;
            textarea.style.position = "fixed"; // avoid scrolling
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();

            try {
                document.execCommand("copy");
            } catch (err) {
                console.error("Copy failed", err);
            }

            document.body.removeChild(textarea);
        }

        setShowMsg(true);
        setTimeout(() => setShowMsg(false), 1200);
    };

    return (
        <div ref={ref} className="container-about">
            <div className="content-about">
                <h2 style={{ border: "none" }}>Aroon Salotra</h2>

                <img className="img-about" src={headshot} />

                <h3>Full Stack Developer</h3>

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