import Tags from "./Tags.js"
import projectStyles from "./Project.module.scss"

const Projects = ({projects}) => {
    if(!projects) {
        return null;
    }
    return (
        <div>
            {
                projects? <p>Projects</p> : null
            }
            {
                projects.map((project) => {
                    return (
                        <div className={projectStyles.projects}>
                            <a href={project.link} className={projectStyles.projects__link}><p>{project.name}</p></a>
                            <a href={project.git} className={projectStyles.projects__git}><img src="/img/socials/github.png"></img></a>
                            <Tags tags={project.tags}></Tags>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Projects;