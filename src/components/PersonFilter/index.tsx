import React from 'react'

interface PersonFilterProps {
  names: any;
  appliedFilters: any;
  setAppliedFilters: any;
}

const PersonFilter = ({names}: PersonFilterProps) => {
  console.log(names)
  return (
    <div>
      <p></p>
      {names.map((name:any, i:any) => {
        return <button key={i}>{name.name}</button>
      })}
    </div>
  )
}

export default PersonFilter
