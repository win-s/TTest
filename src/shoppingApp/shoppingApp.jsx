import React from 'react';

import Items from './list/items/Items';
import AddShoppingListForm from './addShoppingList/AddShoppingListForm';
import ShoppingListFilter from './shoppingListFilter/ShoppingListFilter';

import * as filterService from './shoppingListFilter/filterService/FilterService';

const ShoppingApp = (props) => {

  const onFilterAll = ()=>{
    props.onShoppingAppStateChange({
      ...props.shoppingAppState,
      filter: filterService.TYPE.ALL
    })
  }
  const onFilterActive = ()=>{
    props.onShoppingAppStateChange({
      ...props.shoppingAppState,
      filter: filterService.TYPE.ACTIVE
    })
  }
  const onFilterComplete = ()=>{
    props.onShoppingAppStateChange({
      ...props.shoppingAppState,
      filter: filterService.TYPE.COMPLETED
    })
  }

  const onShoppingValueChange = (e)=>{
    props.onShoppingAppStateChange({
      ...props.shoppingAppState,
      shoppingName: e.target.value
    }); 
  }
  const onAddShoppingList =()=>{
    const shoppingList = [
      ...props.shoppingAppState.shoppingList,
      {
        label: props.shoppingAppState.shoppingName,
        finished: false,
        id: Math.floor(Math.random()*1000)
      }
    ];
    const shoppingName = '';

    props.onShoppingAppStateChange({
      shoppingList,
      shoppingName,
      filter:filterService.TYPE.ALL
    });
  }
  const onClickShoppingList = id => () =>{
    
    const shoppingList = props.shoppingAppState.shoppingList.map((item)=>{
      return id === item.id ? {
        label: item.label,
        finished: !item.finished,
        id: item.id
      }: item;
    });
    props.onShoppingAppStateChange({
      ...props.shoppingAppState,
      shoppingList
    })
  }

  return (
    <div>
      <AddShoppingListForm
        shoppingName={props.shoppingAppState.shoppingName}
        onValueChange={onShoppingValueChange}
        onAddShoppingList={onAddShoppingList}
      />
      <Items 
        items={filterService[props.shoppingAppState.filter](props.shoppingAppState.shoppingList)}
        onClickShoppingList={onClickShoppingList}
      />
      <ShoppingListFilter
        onFilterAll={onFilterAll}
        onFilterActive={onFilterActive}
        onFilterComplete={onFilterComplete}
      ></ShoppingListFilter>
    </div>
  )
}

export default ShoppingApp
