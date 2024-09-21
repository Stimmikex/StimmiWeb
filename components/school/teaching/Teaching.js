import teachingStyles from "./Teaching.module.scss"
import Years from "./Years.js"

const Teaching = ({teaching}) => {
    if(!teaching) {
        return null;
    }
    return (
        <div className={teachingStyles.teaching}>
            {
                teaching? <p>Teaching</p> : null
            }
            <div className={teachingStyles.teaching__container}>
                {
                    teaching?.map((teach) => {
                        return (
                            <div className={teachingStyles.teach}>
                                <p>{teach.course}</p>
                                <Years years={teach.years} key={teach.years}></Years>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Teaching;