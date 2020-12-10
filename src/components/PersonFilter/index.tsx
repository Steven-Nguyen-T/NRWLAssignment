import React from 'react'

interface PersonFilterProps {
  names: any;
  tickets: any;
  appliedFilters: any;
  setAppliedFilters: any;
}

const PersonFilter = ({setAppliedFilters, appliedFilters, tickets, names}: PersonFilterProps) => {

  const filterNames = (nameId:any) => {
    const newAppliedFilters = {...appliedFilters}
    newAppliedFilters['assignee'] = nameId
    setAppliedFilters(newAppliedFilters)
  }


  return (
    <div>
      <p></p>
      {names.map((name:any, i:any) => {
        return <button key={i} onClick={() => filterNames(name.id)}>{name.name}</button>
      })}
      {/* <button onClick={() => filterNames()}>asdf</button> */}
    </div>
  )
}

export default PersonFilter
