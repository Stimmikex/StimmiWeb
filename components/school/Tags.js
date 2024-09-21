import cvStyles from "../cv/Cv.module.scss"

const Tag = ({tags}) => {
    return (
        <div className={cvStyles.school__projects__tags}>
            {tags.map((tag) => {
                return (
                    <p>{tag.name}</p>
                )
            })}
        </div>
    )

}

export default Tag;