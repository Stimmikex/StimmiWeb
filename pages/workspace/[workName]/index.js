export default function Home({ workspaces }) {
  return (
      <main>
          <h1>Test</h1>
      </main>
  )
}

export async function getServerSideProps() {
  const getWorkspaces = await require('../../data/projects.json');
  const workspaces = getWorkspaces.Workspaces;
  return {
    props: {
      workspaces,
    },
  }
}
