import cvStyles from "./Cv.module.scss"
import School from "../school/School.js"
import { server } from "../../pages/config/index.js"

const Cv = ({ user, learned }) => {
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
            </div>
            <div className={cvStyles.cv__footer}>
                <div className={cvStyles.cv__footer__text}>
                    <h1>Where have I learned:</h1>
                    <p>Computer Science</p>
                </div>
                <div className={cvStyles.cv__footer__container}>
                    {
                        learned.map((learn) => {
                            return (
                                <School learn={learn}></School>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Cv