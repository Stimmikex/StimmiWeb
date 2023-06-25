import Styles from "../projects/Styles.module.scss";
import { server } from "../../pages/config/index.js"

const Project = ({ car }) => {
    return (
        <div>
            <div>
                <div>
                    <h2>{car.name}</h2>
                </div>
                <div>
                    <p>{car.dec}</p>
                </div>
            </div>
            <div>
                <a href={car.link}><p>Link</p></a>
            </div>
        </div>
    )
}
export default Project