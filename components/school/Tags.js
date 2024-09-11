const Tag = (tags) => {
    return (
        <div>
            {tags.tags.map((tag) => {
                return (
                    <p>{tag.name}</p>
                )
            })}
        </div>
    )

}

export default Tag;