import React from 'react'

import './item.scss';

const Item = (props) => {
  return (
    <li 
      className={props.finished? 'finished': ''}
      onClick={props.onClickShoppingList}
    >{props.label}</li>
  )
}

export default Item
