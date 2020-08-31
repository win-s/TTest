import React from 'react'

const addShoppingListForm = (props) => {
  return (
    <div>
      <input value={props.shoppingName} onChange={props.onValueChange} type='text'/>
      <button onClick={props.onAddShoppingList}>Add Shopping List</button>
    </div>
  )
}

export default addShoppingListForm
