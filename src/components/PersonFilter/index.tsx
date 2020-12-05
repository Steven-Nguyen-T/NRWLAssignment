import React from 'react'

interface PersonFilterProps {
  names: any;
}

const PersonFilter = ({names}: PersonFilterProps) => {
  console.log(names)
  return (
    <div>
      <p></p>
      {names.map((name:any) => {
        return name.name
      })}
    </div>
  )
}

export default PersonFilter
