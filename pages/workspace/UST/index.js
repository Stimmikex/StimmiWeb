import Link from 'next/link';
import React from 'react'

export default function Home({ workspaces, params }) {
  return (
      <main>
          <h1>UST</h1>
          <Link href='/workspace/UST/gasreader'>
    	      <p>Link to gasreader data</p>
          </Link>
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
