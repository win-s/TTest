import React from 'react'

import Item from '../item/Item'

const Items = (props) => {
  return (
    <ul>
      {
        props.items.map(
          (item) => <Item {...item} onClickShoppingList={props.onClickShoppingList(item.id)} key={item.id}/>
        )
      }
    </ul>
  )
    
}

export default Items
