import React, { useState } from 'react';

import Items from './list/items/Items';
import AddShoppingListForm from './addShoppingList/AddShoppingListForm'
import ShoppingListFilter from './shoppingListFilter/ShoppingListFilter';
import { all,active,completed } from './shoppingListFilter/filterService/FilterService';

const App = () => {
  const [filteredShoppingList,setFilteredShoppingList] = useState([]);
  const [data,setData] = useState([]);
  const [shoppingName,setShoppingName] = useState('');
  

  const onFilterAll = ()=>{
    setFilteredShoppingList( all(data) );
  }
  const onFilterActive = ()=>{
    setFilteredShoppingList( active(data) );
  }
  const onFilterComplete = ()=>{
    setFilteredShoppingList( completed(data) );
  }
  const onShoppingValueChange = (e)=>{
    setShoppingName(e.target.value);
    
  }

  const onAddShoppingList =()=>{
    setData([
      ...data,
      {
        label: shoppingName,
        finished: false
      }
    ]);
    setShoppingName('');
  }

  const onClickShoppingList = index => () =>{
    setData(data.map((item,i)=>{
      return i === index ? {
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
        items={filteredShoppingList}
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
