import cvStyles from "../../cv/Cv.module.scss"

const Years = ({years}) => {
    return (
        <div className={cvStyles.school__projects__tags}>
            {years.map((year) => {
                return (
                    <p>{year.year}</p>
                )
            })}
        </div>
    )

}

export default Years;