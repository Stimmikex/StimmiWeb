import Link from 'next/link';
import WorkspaceStyle from './WorkSpace.module.scss';

const WorkspaceList = ({ workspaces }) => {
    return (
        <div className={WorkspaceStyle.WorkspaceList}>
            <p>WorkSpaces</p>
            {workspaces.map((work) => {
                return (
                    <Link href='/workspace/[workName]' as={`/workspace/${work.name}`}>
                        <div className={WorkspaceStyle.Workspace}>
                            <p>{work.name}</p>
                            <p>{work.dec}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
export default WorkspaceList