import React from 'react'

const ShoppingListFilter = (props) => {
  return (
    <div>
      Show: 
      <FilterLabel click={props.onFilterAll}>All</FilterLabel>,
      <FilterLabel click={props.onFilterActive}>Active</FilterLabel>,
      <FilterLabel click={props.onFilterComplete}>Completed</FilterLabel>,
    </div>
  )
}

const FilterLabel = (props)=> <a href='#' onClick={props.click}>{props.children}</a>

export default ShoppingListFilter
