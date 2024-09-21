const StudentGroups = ({studentgroups}) => {
    if(!studentgroups) {
        return null;
    }
    return (
        <div>
            {
                studentgroups? <p>Student Groups</p> : null
            }
            {
                studentgroups?.map((group) => {
                    return (
                        <div>
                            <p>{group.name}</p>
                            <p>{group.title}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default StudentGroups;