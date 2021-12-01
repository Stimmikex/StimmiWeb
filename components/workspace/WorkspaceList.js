import Link from 'next/link';
import WorkspaceStyle from './WorkSpace.module.scss';

const WorkspaceList = ({ workspaces }) => {
    return (
        <div>
            <p>WorkSpaces</p>
            <div className={WorkspaceStyle.WorkspaceList}>
                {workspaces.map((work) => {
                    return (
                        <Link href='/workspace/[workName]' as={`/workspace/${work.name}`}>
                            <div className={WorkspaceStyle.Workspace}>
                                <div>
                                    
                                </div>
                                <div>
                                    <p>{work.name}</p>
                                    <p>{work.dec}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
export default WorkspaceList