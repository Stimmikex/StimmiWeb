import cvStyles from "../cv/Cv.module.scss"
import schoolStyle from "./School.module.scss"
import { server } from "../../pages/config/index.js"
import Teaching from "./teaching/Teaching"
import StudentGroups from "./student_groups/StudentGroups"
import Projects from "./projects/Projects"

const School = ({learn}) => {
    return (
        <div className={cvStyles.cv__footer__learn}>
            <p style={{
                "background-image": `url(${server + learn.img})`, 
                "background-size": "cover", 
                "background-position": "center", 
                "height": "5em", 
                "border-radius": "1em",
                "border-bottom": "0.5em solid black"}}>
            </p>
            <div className={cvStyles.cv__footer__learn__info}>
                <h3>{learn.name}</h3>
                <i>{learn.length}</i>
            </div>
            <div className={schoolStyle.subs}>
                <Projects projects={learn.projects}></Projects>
                {/* <StudentGroups studentgroups={learn.student_groups}></StudentGroups> */}
                {
                    learn.teaching?
                        <Teaching teaching={learn.teaching}></Teaching>
                    :
                        null
                }
            </div>
        </div>
    )
}

export default School;