import cvStyles from "../../cv/Cv.module.scss"
import projectStyles from "./Project.module.scss"

const Tag = ({tags}) => {
    return (
        <div className={cvStyles.school__projects__tags}>
            {tags.map((tag) => {
                return (
                    <p style={{"background-color": `${tag.color}`}} className={projectStyles.tags}>{tag.name}</p>
                )
            })}
        </div>
    )

}

export default Tag;