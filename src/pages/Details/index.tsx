import React from 'react'
import { Link } from 'react-router-dom'

// interface DetailsProps {
//   props: any;
// }

function Details( props:any ) {
  const {name, description, assigneeId, completed, id} = props.location.state
  return (
    <div>
      <p>{name.name}</p>
      <p>{description.description}</p>
      <p>{assigneeId.assigneeId}</p>
      <p>{completed.ticketStatus}</p>
      <p>{id.id}</p>
      <Link to={{pathname: '/'}}>Go back</Link>
    </div>
  )
}

export default Details
