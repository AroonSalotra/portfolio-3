import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import signature from "../assets/signature.png"

const Navbar = ({ homeRef, projectRef, timelineRef }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (target) => {
        target.current.scrollIntoView({ behavior: "smooth" });
        toggleNavbar();
    }

    const toggleNavbar = () => {
        setIsActive(active => !isActive);
    }

    return (
        <>
            <header className="navbar" ref={homeRef}>
                <div className="nav-top">
                    <img className="nav-title" src={signature}></img>

                    <GiHamburgerMenu className="nav-btn icon-l" onClick={() => setIsActive(!isActive)} />
                </div>

                <ul className={`nav-li ${isActive ? "active" : ""}`}>
                    <li onClick={() => handleClick(homeRef)}>
                        Home
                    </li>

                    <li onClick={() => handleClick(projectRef)}>
                        Projects
                    </li>

                    <li onClick={() => handleClick(timelineRef)}>
                        Timeline
                    </li>
                </ul>
            </header>

            <div className={`overlay ${isActive ? "blur" : ""}`} />
        </>
    );
}

export default Navbar;