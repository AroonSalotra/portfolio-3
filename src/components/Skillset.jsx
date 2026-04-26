import Skill from "./Skill";
import { MdFindInPage } from "react-icons/md";
import { IoMdColorPalette } from "react-icons/io";
import { BsJavascript, BsTypescript } from "react-icons/bs";
import { FaReact, FaFigma } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

const Skillset = () => {

    const skillData = [
        { name: "HTML", icon: <MdFindInPage className="icon" /> },
        { name: "CSS", icon: <IoMdColorPalette className="icon" /> },
        { name: "Javascript", icon: <BsJavascript className="icon" /> },
        { name: "Typescript", icon: <BsTypescript className="icon" /> },
        { name: "React", icon: <FaReact className="icon" /> },
        { name: "Next.js", icon: <SiNextdotjs className="icon" /> },
        { name: "Figma", icon: <FaFigma className="icon" /> },
        { name: "Git", icon: <FaGithub className="icon" /> }
    ]

    return (
        <div className="container-skills">
            <h2 className="section-title">Skillset</h2>

            <div className="skills">
                {skillData.map(({ name, icon }) => (
                    <Skill
                        key={name}
                        name={name}
                        icon={icon}
                    />
                ))}
            </div>

        </div>
    );
}

export default Skillset;