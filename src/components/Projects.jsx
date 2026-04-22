const Projects = () => {

    const data = [
        { name: "Clicker Game" },
        { name: "Deal-IO" },
        { name: "Drag n Drop" }
    ]

    return (
        <div className="container-projects">
            <h2>Projects</h2>
            <div className="projects">
                {data.map(({ name }) => (
                    <div key={name}>{name}</div>
                ))}
            </div>
        </div>

    )

}

export default Projects;