import Project from "./Project"
import Styles from "./Styles.module.scss";

const ProjectList = ({ projects, user }) => {
    return (
        <div className={Styles.arbitor}>
            <div className={Styles.component}>
                <div className={Styles.component__main}>
                    <div className={Styles.component__main__container}>
                    <div className={Styles.component__main__container__header}>
                        <h2>{user.name}</h2>
                    </div>
                    <div className={Styles.component__main__container__info}>
                        <h2>Summary</h2>
                        <p>{user.info}</p>
                    </div>
                    </div>
                </div>
                <div className={Styles.component__projects}>
                    {projects.map((project) => {
                        return (
                        <Project project={project} key={project.id}></Project> 
                        )
                    })}
                </div>
            </div>
            <style jsx global>{`
                body {
                    margin: 0 auto;
                }
        `   }</style>
        </div>
    )
}
export default ProjectList