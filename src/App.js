import React, {useState} from 'react'
import ShoppingApp from './shoppingApp/shoppingApp'
import { TYPE } from './shoppingApp/shoppingListFilter/filterService/FilterService'

import History from './history/History'
import { addHistory, getAppState, getNextAppIndex, getPreviousAppIndex} from './history/HistoryService';

const initialAppState = {
  shoppingList: [],
  shoppingName: '',
  filter: TYPE.ALL
}

const App = () => {

  const [history,setHistory] = useState({
    data: [initialAppState],
    currentIndex: 0
  })

  const onUndo = ()=>{
    const previousIndex = getPreviousAppIndex(history)
    setHistory({
      data: history.data,
      currentIndex: previousIndex
    })
  }
  const onRedo = ()=>{
    const nextIndex = getNextAppIndex(history)
    setHistory({
      data: history.data,
      currentIndex: nextIndex
    })
  }
  const onShoppingAppChange = (newState)=>{
    setHistory(addHistory(history,newState))
  }

  return (
    <div>
      <ShoppingApp
        onShoppingAppStateChange={onShoppingAppChange}
        shoppingAppState={getAppState(history)}
      >
      </ShoppingApp>
      <History
        onUndo={onUndo}
        onRedo={onRedo}
      ></History>
    </div>
  )
}

export default App
