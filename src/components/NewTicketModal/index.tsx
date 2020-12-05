import React from 'react'
import './NewTicketModal.css'

interface NewTicketModalProps {
  children: any;
  setNewTicketModal: any;
}

const NewTicketModal = ({children, setNewTicketModal}: NewTicketModalProps) => {


  return (
    <div className='overlay'>
      <div className='modal-container'>
        {children}
        <button onClick={() => setNewTicketModal(false)}>Close Modal</button>
      </div>
    </div>
  )
}

export default NewTicketModal;
