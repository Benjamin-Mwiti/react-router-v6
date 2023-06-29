import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function CareerDetails() {
    // const { id } = useParams();
    const career = useLoaderData();

  return (
    <div className='career-details'>
      <h2>Career details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>
      </div>
    </div>
  )
}

export const careerDetailsLoader = async ({ params }) => {
    const { id } = params;
    const res = await fetch('http://localhost:4000/careers/' + id);
    if(!res.ok) {
      throw Error('Could not find that career')
    }
    return res.json()
}

export default CareerDetails
