import Project from "./Project";

const Projects = () => {

    const data = [
        { name: "Click'A Thon" },
        { name: "Deal-IO" },
        { name: "Drag n Drop" }
    ]

    return (
        <div className="container-projects">
            <h2>Projects</h2>
            <div className="projects">
                {data.map(({ name }) => (
                    <Project key={name} name={name} />
                ))}
            </div>
        </div>

    )

}

export default Projects;