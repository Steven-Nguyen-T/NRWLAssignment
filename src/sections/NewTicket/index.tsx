import React, { useState } from 'react'

interface TicketProps {
  tickets: any;
  setTickets: any;
  setNewTicketModal: any;
  names: any;
}

const NewTicket = ({ tickets, setTickets, setNewTicketModal, names }: TicketProps) => {
  const [description, setDescription] = useState('')
  const [name, setName] = useState('')

  const getIdFromName = () => {
    for (let i = 0; i < names.length; i++) {
      if (name === names[i].name) {
        return names[i].id 
      }
    }
  }

  const addTicket = () => {
    const newTickets = tickets.slice()
    newTickets.push({
      id: tickets.length,
      description: description,
      assigneeId: getIdFromName(),
      completed: false});
    setTickets(newTickets);
  }

  return (
    <div>
      <input placeholder='description' onChange={(e) => {setDescription(e.target.value)}} ></input>
      <input placeholder='name' onChange={(e) => setName(e.target.value)}></input>
      <button onClick={() => addTicket()}>New Ticket</button>
    </div>
  )
}

export default NewTicket
