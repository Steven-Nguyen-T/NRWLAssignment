import React from 'react'

interface StatusFilterProps {
  tickets: any;
  setFiltered: any;
  filtered: any;
  setAppliedFilters: any;
  appliedFilters: any;
}

const StatusFilter = ({ tickets, setFiltered, filtered, setAppliedFilters, appliedFilters }: StatusFilterProps) => {
  const completedButton = () => {
    const newAppliedFilters = {...appliedFilters}
    newAppliedFilters['completed'] = 'completed';
    setAppliedFilters(newAppliedFilters)
  }

  const notCompletedButton = () => {
    const newAppliedFilters = {...appliedFilters}
    newAppliedFilters['completed'] = 'notCompleted';
    setAppliedFilters(newAppliedFilters)
  }

  return (
    <div>
      <button onClick={() => completedButton()}> Completed</button>
      <button onClick={() => notCompletedButton()}>Not Completed</button>
    </div>
  )
}

export default StatusFilter
