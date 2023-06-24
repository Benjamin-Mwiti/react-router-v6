import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

function CareersError() {
    const error = useRouteError()
  return (
    <div className='career-error'>
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to='/'>Back to the homepage</Link>
    </div>
  )
}

export default CareersError
