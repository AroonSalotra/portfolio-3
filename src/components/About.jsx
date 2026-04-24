import headshot from "../assets/headshot.jpg"

const About = () => {
    return (
        <div className="container-about">
            <h2>Aroon Salotra</h2>
            <h3>Full Stack Developer</h3>

            <img className="img-about" src={headshot} />

            {/* <p className="text-about">
                Self-taught UK based developer - I build applications focusing on responsiveness & functionality.
            </p> */}

            <ul>
                <li>LinkedIn:</li>
                <li>Email:</li>
                <li>Phone:</li>
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