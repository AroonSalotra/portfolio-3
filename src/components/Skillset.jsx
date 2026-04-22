import Skill from "./Skill";

const Skillset = () => {

    const skillData = [
        { name: "HTML" },
        { name: "CSS" },
        { name: "Javascript" },
        { name: "Typescript" },
        { name: "React" },
        { name: "Next.js" },
        { name: "Figma" },
        { name: "Git" }
    ]

    return (
        <div className="container-skills">
            <h2>
                Skillset
            </h2>

            <div className="skills">
                {skillData.map(({ name }) => (
                    <Skill key={name} name={name} />
                ))}
            </div>

        </div>
    );
}

export default Skillset;