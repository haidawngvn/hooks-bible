import  { useEffect, useLayoutEffect, useState, useRef, memo, useReducer } from 'react'

// useReducer: giống với useState nhưng cho những bài toán có state phức tạp (object nhiều cấp, nhiều mảng lồng nhau)

// Các bước khi sd useReducer
// 1. init state
// 2. Actions to set state
// 3. Reducer
// 4. Dispatch

//1
const initState = 0
//2
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'
//3
const reducer = (state, action) => {
    switch(action) {
        case UP_ACTION:
            return state + 1
            break
        case DOWN_ACTION:
            return state - 1
            break
        default:
            throw new Error('Invalid action')
    }
}

function App() {

    const [counter, dispatch] = useReducer(reducer, initState)
  
    const handleIncrease = () => {
      
    }
  
  
  
    return (
      <div className="App">
        <h1> {counter}</h1>
        <button onClick={handleIncrease}>Increase</button>
      </div>
    );
}

  
export default App;
   