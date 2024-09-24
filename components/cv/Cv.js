import cvStyles from "./Cv.module.scss";
import School from "../school/School.js";
import { server } from "../../pages/config/index.js";
import TagsSelected from "../school/projects/TagsSelected";

const Cv = ({ user, learned, projects }) => {
    // Step 1: Gather all tags across all projects
    const allTags = learned
        .flatMap(learn => learn.projects)
        .flatMap(project => project.tags);

    // Step 2: Filter out unique tags using a Map
    const uniqueTagsMap = new Map();
    allTags.forEach((tag) => {
        const key = `${tag.name}-${tag.color}`;
        if (!uniqueTagsMap.has(key)) {
            uniqueTagsMap.set(key, tag); // Add only unique tags based on name and color
        }
    });
    const uniqueTags = Array.from(uniqueTagsMap.values());

    return (
        <div className={cvStyles.cv}>
            <div className={cvStyles.cv__header}>
                <div className={cvStyles.cv__header__left}>
                    <p
                        style={{
                            "background-image": `url(${server + user.img})`,
                            "background-size": "cover",
                            "background-position": "center"
                        }}
                    ></p>
                </div>
                <div className={cvStyles.cv__header__right}>
                    {user.socials.map((social, index) => (
                        <a key={index} href={social.link}>
                            <img src={social.img} alt={social.name}></img>
                        </a>
                    ))}
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

                    <div className={cvStyles.cv__footer__tags}>
                        <p>Tags: </p>
                        {/* Step 3: Pass the unique tags to TagsSelected */}
                        <TagsSelected tags={uniqueTags}></TagsSelected>
                    </div>
                </div>

                <div className={cvStyles.cv__footer__container}>
                    {learned.map((learn, index) => (
                        <School key={index} learn={learn}></School>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cv;
