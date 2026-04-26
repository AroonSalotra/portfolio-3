import { useEffect } from "react";
import { FaLink } from "react-icons/fa6";

const Project = ({ name, description, imgUrl, stack, redirect }) => {
  return (
    <a className="project-card fade-in-anim" target="_blank" href={redirect}>
      <div>
        <img className="img-project" src={imgUrl} />
      </div>
      <div className="project-text">
        <h2 className="project-title">{name}</h2>
        <p className="project-desc">{description}</p>
        <p className="project-stack">{stack}</p>
      </div>
    </a>
  )
}

export default Project;
