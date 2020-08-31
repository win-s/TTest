import React from 'react'

import Item from '../item/Item'

const Items = (props) => {
  console.log(props);
  return (
    <ul>
      {
        props.items.map(
          (item,i) => <Item {...item} onClickShoppingList={props.onClickShoppingList(i)} key={i}/>
        )
      }
    </ul>
  )
    
}

export default Items
