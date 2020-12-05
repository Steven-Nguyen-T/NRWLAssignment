import React from 'react'
import Ticket from '../../components/Ticket'

interface TicketProps {
  tickets: any;
  names: any;
  setTickets: any;
  filtered: any;
}

const TicketList = ({ tickets, names, setTickets, filtered }: TicketProps) => {

  return (
    <div>
      <h1>TicketList</h1>
      {filtered ? (
        <ul>
          {filtered.map((t:any) => (
            <li key={t.id}>
              <Ticket id={t.id} description={t.description} completed={t.completed} assigneeId={t.assigneeId} names={names} setTickets={setTickets} tickets={tickets}/>
            </li>
          ))}
        </ul>
      ) : (
        <span>...</span>
      )}
    </div> 
  )
}

export default TicketList
