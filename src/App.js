import React, { useState } from 'react';

import Items from './list/items/Items';
import AddShoppingListForm from './addShoppingList/AddShoppingListForm'
import ShoppingListFilter from './shoppingListFilter/ShoppingListFilter';
import * as filterService from './shoppingListFilter/filterService/FilterService';

const App = () => {

  const [data,setData] = useState([]);
  const [filter,setFilter] = useState(filterService.TYPE.ALL);
  const [shoppingName,setShoppingName] = useState('');
  

  const onFilterAll = ()=>{
    setFilter(filterService.TYPE.ALL);
  }
  const onFilterActive = ()=>{
    setFilter(filterService.TYPE.ACTIVE)
  }
  const onFilterComplete = ()=>{
    setFilter(filterService.TYPE.COMPLETED);
  }
  const onShoppingValueChange = (e)=>{
    setShoppingName(e.target.value);
    
  }

  const onAddShoppingList =()=>{
    setData([
      ...data,
      {
        label: shoppingName,
        finished: false,
        id: Math.floor(Math.random()*1000)
      }
    ]);
    setShoppingName('');
    onFilterAll();
  }

  const onClickShoppingList = index => () =>{
    setData(data.map((item)=>{
      return index === item.id ? {
        label: item.label,
        finished: !item.finished
      }: item;
    }));
  }

  return (
    <div>
      <AddShoppingListForm
        shoppingName={shoppingName}
        onValueChange={onShoppingValueChange}
        onAddShoppingList={onAddShoppingList}
      />
      <Items 
        items={filterService[filter](data)}
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

export default App
