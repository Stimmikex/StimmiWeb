import Styles from "./Styles.module.scss";
import { server } from "../../pages/config/index.js"

const Project = ({ project }) => {
    return (
        <div className={Styles.component__project} style={{"background": `url(${server+project.img})`, "background-repeat" : "no-repeat"
        ,"background-position" : "center"}}>
            <div className={Styles.component__project__upper}>
                <div className={Styles.component__project__upper__header}>
                    <h2>{project.name}</h2>
                </div>
                <div className={Styles.component__project__upper__text}>
                    <p>{project.dec}</p>
                </div>
            </div>
            <div className={Styles.component__project__footer}>
                <a href={project.link}><p>Link</p></a>
            </div>
        </div>
    )
}
export default Project