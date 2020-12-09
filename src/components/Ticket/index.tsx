import React from 'react'
import './Ticket.css'
import {Link} from 'react-router-dom'

interface TicketProps {
  id: number;
  description: string;
  assigneeId: null | number;
  completed: boolean;  
  names: any;
  setTickets: any;
  tickets: any;
}

const Ticket = ({ id, description, assigneeId, completed, names, setTickets, tickets }: TicketProps) => {
  // const [setAssign] = useState('')

  const findName = (names:any) => {
    for (let i = 0; i < names.length; i++) {
      if (names[i].id === assigneeId) {
        return names[i].name
      }
    }
  }

  const name = names ? findName(names) : 'no name' 
  const status = () => {
    if (completed) return 'Completed';
    return 'Not Completed'
  }
  
  const updateCompletion = () => {
    const updateTickets = tickets.slice()
    if (updateTickets[id].completed) {
      updateTickets[id].completed = false;
    } else {
      updateTickets[id].completed = true;
    }
    setTickets(updateTickets)
  }

  const ticketStatus = status()

  return (
    <div className='container'>
      <Link to={{ pathname: "/details", state: { id: {id}, description: {description}, completed: {ticketStatus}, name:{name}, assigneeId:{assigneeId}} }}>Details</Link>
      {/* <input placeholder='enter name' onChange={(e) => {setAssign(e.target.value)}}></input> */}
      {/* <button onClick={() => updateAssign()}>Assign</button> */}
      <button onClick={() => updateCompletion()}>Mark Complete</button>
      <p>{id}</p>
      <p>{name}</p>
      <p>{ticketStatus}</p>
      <p>{description}</p>
    </div>
  )
}

export default Ticket
