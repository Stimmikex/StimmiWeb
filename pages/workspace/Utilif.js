import React from 'react'

export default function Home({ workspaces, params }) {
  return (
      <main>
          <h1>Utilif</h1>
          <div class='selectType'>
            <form name='selectType' action='index.php' method='POST'>
                <select name='myselect'>
                </select>
                <input type='submit'></input>
            </form>
          </div>
          <div class='cons'>
            <div class='temp__image'>
                <div class='temp__header'>

                </div>
                <div class='temp__text'>

                </div>
                <div class='temp__price'>
                    
                </div>
            </div>
          </div>
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
