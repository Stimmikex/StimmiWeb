import cvStyles from "../cv/Cv.module.scss"
import { server } from "../../pages/config/index.js"

const School = ({learn}) => {
    console.log(learn)
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
                            <div>
                                {console.log(project.tags)}
                                <p>{project.name}</p>
                                {/* {
                                    project.tags.map((tag) => {
                                        return (
                                            <div>
                                                <p>{tag.name}</p>
                                            </div>
                                        )
                                    })
                                } */}
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <p>Student Groups</p>
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
        </div>
    )
}

export default School;