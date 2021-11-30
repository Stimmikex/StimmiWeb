import ProjectList from '../components/projects/ProjectList.js'
import Cv from '../components/cv/Cv.js'

export default function Home({ projects, user, skills, learned }) {
  return (
      <main>
        <Cv skills={skills} user={user} learned={learned} ></Cv>
        <ProjectList projects={projects} user={user}></ProjectList>
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
  return {
    props: {
      projects,
      user,
      skills,
      learned,
    },
  }
}