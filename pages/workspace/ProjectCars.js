import React from 'react'
import CarList from '../../components/cars/CarList'

export default function Cars({ cars, params }) {
  return (
      <main>
          <h1>Cars</h1>
          {
            <CarList cars={cars}></CarList>
          }
      </main>
  )
}

export async function getServerSideProps() {
  const getWorkspaces = await require('../data/projects.json');
  const cars = getWorkspaces.Cars;
  return {
    props: {
      cars,
    },
  }
}
