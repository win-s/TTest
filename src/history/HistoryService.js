export const getNextAppIndex = (history) => {
  return atTop(history) ? history.currentIndex : history.currentIndex+1
}

export const getPreviousAppIndex = (history) => {
  return atBotton(history) ? 0 : history.currentIndex -1
}

export const getAppState = (history)=>{
  return history.data[history.currentIndex]
}

export const addHistory = (history,newState) => {
  const newHistoryData = history.data.slice(0,history.currentIndex+1)
  newHistoryData.push(newState)
  const newHistory = {
    data: newHistoryData,
    currentIndex: history.currentIndex+1
  }
  return newHistory
}

const atTop = history => history.currentIndex === history.data.length-1
const atBotton = history => history.currentIndex === 0
