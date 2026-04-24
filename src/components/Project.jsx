import { useEffect } from "react";
import { FaLink } from "react-icons/fa6";

const Project = ({ name, description, imgUrl, stack }) => {
  return (
    <div className="project-card">
      <div>
        <img className="img-project" src={imgUrl} />
      </div>
      <div className="project-text">
        <h2>{name}</h2>
        <p className="img-desc">{description}</p>
        <p>Made with {stack}</p>
      </div>
    </div>
  )
}

export default Project;
