import { useState, useEffect, useRef } from "react";
import { db } from "../config/firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import Project from "./Project";

const Projects = () => {
    const sectionRef = useRef(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        const getProjects = async () => {

            const colRef = collection(db, "Projects")
            const snap = await getDocs(colRef)

            const projectList = snap.docs.map(doc => ({
                id: doc.id,
                ...doc.data()   
            }));

            setData(projectList);
        }

        getProjects();

    }, [])

    return (
        <div className="container-projects">
            <h2 id="projects">Projects</h2>
            <div className="projects section">
                {data.length > 0 && data.map(({ id, name, description, imageLink, stack }) => (
                    <Project key={id} name={name} imgUrl={imageLink} description={description} stack={stack} />
                ))}
            </div>
        </div>

    )

}

export default Projects;