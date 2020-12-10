import React from 'react'
import PersonFilter from '../../components/PersonFilter';
import StatusFilter from '../../components/StatusFilter'

interface FilterProps {
  tickets: any;
  setFiltered: any;
  filtered: any;
  setAppliedFilters: any;
  appliedFilters: any;
  names: any;
}

const Filter = ({ tickets, setFiltered, filtered, setAppliedFilters, appliedFilters, names }: FilterProps) => {
  return (
    <div>
      <h1>Filter</h1>
      <h2>Status Filter</h2>
      <StatusFilter appliedFilters={appliedFilters} filtered={filtered} tickets={tickets} setFiltered={setFiltered} setAppliedFilters={setAppliedFilters}/>
      <h2>Person Filter</h2>
      <PersonFilter setAppliedFilters={setAppliedFilters} appliedFilters={appliedFilters} tickets={tickets} names={names}/>
    </div>
  )
}

export default Filter;
