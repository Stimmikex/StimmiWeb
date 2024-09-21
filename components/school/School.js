import cvStyles from "../cv/Cv.module.scss"
import { server } from "../../pages/config/index.js"
import Tags from "./Tags.js"
import Teaching from "./teaching/Teaching"

const School = ({learn}) => {
    return (
        <div className={cvStyles.cv__footer__learn}>
            <p style={{"background-image": `url(${server + learn.img})`, "background-size": "cover", "background-position": "center"}}></p>
            <div className={cvStyles.cv__footer__learn__info}>
                <h3>{learn.name}</h3>
                <i>{learn.length}</i>
            </div>
            <div>
                <p>Projects</p>
                {
                    learn.projects.map((project) => {
                        return (
                            <div className={cvStyles.school__projects}>
                                <a href={project.link}><p>{project.name}</p></a>
                                <a href={project.git}><img src="/img/socials/github.png"></img></a>
                                <Tags tags={project.tags}></Tags>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                {
                    learn.student_groups? <p>Student Groups</p> : null
                }
                {
                    learn.student_groups?.map((group) => {
                        return (
                            <div>
                                <p>{group.name}</p>
                                <p>{group.title}</p>
                            </div>
                        )
                    })
                }
            </div>
            <Teaching teaching={learn.teaching}></Teaching>
        </div>
    )
}

export default School;