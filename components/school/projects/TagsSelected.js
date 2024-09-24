import projectStyles from "./Project.module.scss";

const TagsSelected = ({ tags, onTagClick }) => {
    return (
        <div className={projectStyles.tagsSelected}>
            {tags.map((tag, index) => (
                <button
                    key={index}
                    onClick={() => onTagClick(tag)} // Call onTagClick when the tag is clicked
                >
                    <p
                        style={{ "background-color": `${tag.color}` }}
                        className={projectStyles.tags}
                    >
                        {tag.name}
                    </p>
                </button>
            ))}
        </div>
    );
};

export default TagsSelected;
