import Car from "./Car";
import Styles from "../projects/Styles.module.scss";

const ProjectList = ({ cars, user }) => {
    return (
        <div>
            <div>
                <div>
                    {cars.map((car) => {
                        return (
                        <Car car={car} key={car.id}></Car> 
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