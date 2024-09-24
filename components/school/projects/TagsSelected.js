import projectStyles from "./Project.module.scss"

const TagsSelected = ({tags}) => {
    return (
        <div className={projectStyles.tagsSelected}>
            {tags.map((tag) => {
                return (
                    <button>
                        <p style={{"background-color": `${tag.color}`}} className={projectStyles.tags}>{tag.name}</p>
                    </button>
                )
            })}
        </div>
    )

}

export default TagsSelected;