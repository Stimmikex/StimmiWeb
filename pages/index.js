import ProjectList from '../components/projects/ProjectList.js'
import Cv from '../components/cv/Cv.js'
import WorkspaceList from '../components/workspace/WorkspaceList.js'

export default function Home({ projects, user, skills, learned, workspaces }) {
  return (
      <main>
        <Cv skills={skills} user={user} learned={learned} ></Cv>
        <ProjectList projects={projects} user={user}></ProjectList>
        <WorkspaceList workspaces={workspaces}></WorkspaceList>
      </main>
  )
}

export async function getServerSideProps() {
  const getProjects = await require('./data/projects.json');
  const projects = getProjects.projects;
  const getUser = await require('./data/projects.json');
  const user = getUser.userInfo;
  const getSkills = await require('./data/projects.json');
  const skills = getSkills.Skills;
  const getLearned = await require('./data/projects.json');
  const learned = getLearned.Learned;
  const getWorkspaces = await require('./data/projects.json');
  const workspaces = getWorkspaces.Workspaces;
  return {
    props: {
      projects,
      user,
      skills,
      learned,
      workspaces,
    },
  }
}
