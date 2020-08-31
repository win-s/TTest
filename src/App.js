import React, { useState } from 'react';

import Items from './list/items/Items';
import AddShoppingListForm from './addShoppingList/AddShoppingListForm';
import ShoppingListFilter from './shoppingListFilter/ShoppingListFilter';
import History from './history/History';

import * as filterService from './shoppingListFilter/filterService/FilterService';

const history = [];

const App = () => {

  const [appData,setAppData] = useState({
    shoppingList: [],
    shoppingName: '',
    filter: filterService.TYPE.ALL
  })
  

  const onFilterAll = ()=>{
    setAppData({
      ...appData,
      filter: filterService.TYPE.ALL
    })
  }
  const onFilterActive = ()=>{
    setAppData({
      ...appData,
      filter: filterService.TYPE.ACTIVE
    })
  }
  const onFilterComplete = ()=>{
    setAppData({
      ...appData,
      filter: filterService.TYPE.COMPLETED
    })
  }
  const onShoppingValueChange = (e)=>{
    setAppData({
      ...appData,
      shoppingName: e.target.value
    });
    
  }

  const onAddShoppingList =()=>{
    const shoppingList = [
      ...appData.shoppingList,
      {
        label: appData.shoppingName,
        finished: false,
        id: Math.floor(Math.random()*1000)
      }
    ];
    const shoppingName = '';

    setAppData({
      shoppingList,
      shoppingName,
      filter:filterService.TYPE.ALL
    });
  }

  const onClickShoppingList = id => () =>{
    
    const shoppingList = appData.shoppingList.map((item)=>{
      return id === item.id ? {
        label: item.label,
        finished: !item.finished,
        id: item.id
      }: item;
    });
    setAppData({
      ...appData,
      shoppingList
    })
  }
  const onUndo = ()=>{

  }
  const onRedo = ()=>{}

  return (
    <div>
      <AddShoppingListForm
        shoppingName={appData.shoppingName}
        onValueChange={onShoppingValueChange}
        onAddShoppingList={onAddShoppingList}
      />
      <Items 
        items={filterService[appData.filter](appData.shoppingList)}
        onClickShoppingList={onClickShoppingList}
      />
      <ShoppingListFilter
        onFilterAll={onFilterAll}
        onFilterActive={onFilterActive}
        onFilterComplete={onFilterComplete}
      ></ShoppingListFilter>
      <History
        onUndo={onUndo}
        onRedo={onRedo}
      ></History>
    </div>
    
  )
}

export default App
