import WorkplaceStyle from './Workplace.module.scss';
import Workplace from './Workplace';

const WorkplaceList = ({ workplaces }) => {
    return (
        <div>
            <p>Workplaces</p>
            <div className={WorkplaceStyle.WorkplaceList}>
                {workplaces.map((work) => {
                    return (
                        <Workplace workplace={work}></Workplace>
                    )
                })}
            </div>
        </div>
    )
}
export default WorkplaceList