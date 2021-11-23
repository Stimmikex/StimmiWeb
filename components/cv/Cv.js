import cvStyles from "./Cv.module.scss"
import ProgressBar from "../ProgressBar"
import { server } from "../../pages/config/index.js"

const Cv = ({ skills, user }) => {
    return (
        <div className={cvStyles.cv}>
            <div className={cvStyles.cv__header}>
                <div className={cvStyles.cv__header__left}>
                    <img src={server + user.img} alt="test"></img>
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
                    <p>{user.name}</p>
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

            </div>
        </div>
    )
}

export default Cv