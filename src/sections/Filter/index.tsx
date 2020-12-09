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
      <StatusFilter appliedFilters={appliedFilters} filtered={filtered} tickets={tickets} setFiltered={setFiltered} setAppliedFilters={setAppliedFilters}/>
      <PersonFilter names={names} appliedFilters={appliedFilters} setAppliedFilters={setAppliedFilters}/>
      <h1>Filter</h1>
    </div>
  )
}

export default Filter;
