const Navbar = ({ homeRef, projectRef, timelineRef }) => {

    const handleClick = (target) => {
        target.current.scrollIntoView({ behavior: "smooth" });
        console.log("clicked")
    }

    return (
        <>
            <ul className="navbar">
                <li onClick={() => handleClick(homeRef)}>Home</li>
                <li onClick={() => handleClick(projectRef)}>Projects</li>
                <li onClick={() => handleClick(timelineRef)}>Timeline</li>
            </ul>
        </>
    );
}

export default Navbar;