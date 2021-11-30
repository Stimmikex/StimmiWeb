import cvStyles from "./Cv.module.scss"
import ProgressBar from "../utility/ProgressBar"
import { server } from "../../pages/config/index.js"

const Cv = ({ skills, user, learned }) => {
    return (
        <div className={cvStyles.cv}>
            <div className={cvStyles.cv__header}>
                <div className={cvStyles.cv__header__left}>
                    <p style={{"background-image": `url(${server + user.img})`, "background-size": "cover", "background-position": "center"}}></p>
                    {/* <img src={server + user.img} alt="test"></img> */}
                </div>
                <div className={cvStyles.cv__header__right}>
                    {user.socials.map((social) => {
                        return (
                            <a href={social.link}><img src={social.img} alt={social.name}></img></a>
                        )
                    })}
                </div>
            </div>
            <div className={cvStyles.cv__main}>
                <div className={cvStyles.cv__main__left}>
                    <h1>{user.name}</h1>
                    <p>Hi</p>
                </div>
                <div className={cvStyles.cv__main__right}>
                    <div className={cvStyles.cv__main__right__info}>
                        <h2>Programming languages</h2>
                        {skills.proleng.map((proleng) => {
                            return (
                                <div>
                                    <p>{proleng.name}</p>
                                    <ProgressBar value={proleng.pro}></ProgressBar>
                                </div>
                            )
                        })}
                    </div>
                    <div className={cvStyles.cv__main__right__skills}>
                        <h2>Developments</h2>
                        {skills.dev.map((dev) => {
                            return (
                                <div>
                                    <p>{dev.name}</p>
                                    <ProgressBar value={dev.pro}></ProgressBar>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className={cvStyles.cv__footer}>
                <div>
                    <h1>Where have I learned:</h1>
                    <p>Computer Science</p>
                </div>
                {learned.map((learn) => {
                    return (
                        <div className={cvStyles.cv__footer__learn}>
                            <p style={{"background-image": `url(${server + learn.img})`, "background-size": "cover", "background-position": "center"}}></p>
                            <div className={cvStyles.cv__footer__learn__info}>
                                <h3>{learn.name}</h3>
                                <i>{learn.length}</i>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cv