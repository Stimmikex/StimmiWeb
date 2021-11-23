import progressStyle from "./Progress.module.scss"

const ProgressBar = ({ value }) => {
    return (
        <div className={progressStyle.container}>
            <div className={progressStyle.container__bar} style={{"width": `${value}%`}}>
                <p>{value}%</p>
            </div>
        </div>
    )
}

export default ProgressBar