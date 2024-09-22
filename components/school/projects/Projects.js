import React, { useState } from "react";
import Tags from "./Tags.js";
import projectStyles from "./Project.module.scss";

const Projects = ({ projects }) => {
    const [showProjects, setShowProjects] = useState(false);

    if (!projects) {
        return null;
    }

    const toggleProjectsVisibility = () => {
        setShowProjects(!showProjects);
    };

    return (
        <div className={projectStyles.projectsWrapper}>
            {projects ? (
                <div className={projectStyles.menu}>
                    <p>Projects:</p>
                    <button 
                        onClick={toggleProjectsVisibility} 
                        className={projectStyles.menu__counter}
                    >
                        {projects.length}
                    </button>
                </div>
            ) : null}

            <div
                className={`${projectStyles.projectsContainer} ${showProjects ? projectStyles.show : projectStyles.hide}`}
            >
                {projects.map((project) => (
                    <div className={projectStyles.projects} key={project.name}>
                        <a href={project.link} className={projectStyles.projects__link}>
                            <p>{project.name}</p>
                        </a>
                        <a href={project.git} className={projectStyles.projects__git}>
                            <img src="/img/socials/github.png" alt="GitHub" />
                        </a>
                        <Tags tags={project.tags} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
