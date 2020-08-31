import React from 'react'

const History = (props) => {
  return (
    <div>
      <button onClick={props.onUndo}>Undo</button>
      <button onClick={props.onRedo}>Redo</button>
    </div>
  )
}

export default History
