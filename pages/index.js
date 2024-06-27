import ProjectList from '../components/projects/ProjectList.js'
import Cv from '../components/cv/Cv.js'
import WorkspaceList from '../components/workspace/WorkspaceList.js'
import WorkplaceList from '../components/workplace/WorkplaceList.js'

export default function Home({ projects, user, skills, learned, workspaces, workplaces }) {
  return (
      <main className='MainContainer'>
        {/* <Cv skills={skills} user={user} learned={learned} ></Cv> */}
        <WorkplaceList workplaces={workplaces}></WorkplaceList>
        {/* <ProjectList projects={projects} user={user}></ProjectList> */}
        {/* <WorkspaceList workspaces={workspaces}></WorkspaceList> */}
      </main>
  )
}

export async function getServerSideProps() {
  const getData = await require('./data/projects.json');
  const projects = getData.projects;
  const user = getData.userInfo;
  const skills = getData.Skills;
  const learned = getData.Learned;
  const workspaces = getData.Workspaces;
  const workplaces = getData.Workplaces;
  return {
    props: {
      projects,
      user,
      skills,
      learned,
      workspaces,
      workplaces,
    },
  }
}
