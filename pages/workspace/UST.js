import React from 'react'

export default function Home({ workspaces, params }) {
  return (
      <main>
          <h1>UST</h1>
      </main>
  )
}

// export async function getServerSideProps({ params }) {
//   const getWorkspaces = await require('../../data/projects.json');
//   const workspaces = getWorkspaces.Workspaces;
//   return {
//     props: {
//       workspaces,
//       params,
//     },
//   }
// }
