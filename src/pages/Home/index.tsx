import React, { useEffect, useState } from "react";
import { BackendService, Ticket, User } from '../../backend'

import Filter from '../../sections/Filter'
import NewTicket from '../../sections/NewTicket'
import TicketList from '../../sections/TicketList'
import NewTicketModal from "../../components/NewTicketModal";

interface AppProps {
  backend: BackendService;
}

function Home({ backend }: AppProps) {
  const [tickets, setTickets] = useState([] as Ticket[]);
  const [names, setNames] = useState([] as User[]);
  const [filtered, setFiltered] = useState([] as Ticket[])
  const [appliedFilters, setAppliedFilters] = useState({'completed': '', 'assignee': ''})

  //for Modal
  const [newTicketModal, setNewTicketModal] = useState(false)
  // The backend returns observables, but you can convert to promises if
  // that is easier to work with. It's up to you.

  useEffect(() => {
    const fetchData = async () => {
      const result = await backend.tickets().toPromise();
      const resultUser = await backend.users().toPromise();
      setNames(resultUser);
      setTickets(result);
      setFiltered(result)
    };
    fetchData();
  }, [backend]);

  useEffect(() => {
    const arr = [];
    if (appliedFilters.completed === 'completed') {
        for (let i = 0; i < tickets.length; i++) {
          if (tickets[i].completed) {
            arr.push(tickets[i])
          }
        }
        setFiltered(arr)
    } else if (appliedFilters.completed === 'notCompleted') {
      for (let i = 0; i < tickets.length; i++) {
        if (!tickets[i].completed) {
          arr.push(tickets[i])
        }
      }
      setFiltered(arr)
    } else {
      setFiltered(tickets)
    }
    if (appliedFilters.assignee) {
      const newArr = []
      for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].assigneeId === parseInt(appliedFilters.assignee)) {
          newArr.push(tickets[i])
        }
        console.log('filtered',tickets[i])
      }
      setFiltered(newArr)
    }
  }, [appliedFilters, tickets])

  return (
    <div className="app">
      <h1> Ticket System </h1>
      <button onClick={() => setNewTicketModal(true)}>Create New Ticket</button>
      {newTicketModal ? <NewTicketModal setNewTicketModal={setNewTicketModal}><NewTicket names={names} setNewTicketModal={setNewTicketModal} tickets={tickets} setTickets={setTickets}/>
        </NewTicketModal> : null}
      <Filter names={names} appliedFilters={appliedFilters} setAppliedFilters={setAppliedFilters} filtered={filtered} tickets={tickets} setFiltered={setFiltered}/>
      <TicketList tickets={tickets} names={names} setTickets={setTickets} filtered={filtered}/>
    </div>
  );
}

export default Home
