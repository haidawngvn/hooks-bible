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
// const UP_ACTION = 'up'
// const DOWN_ACTION = 'down'
//3
const reducer = (state, action) => {
    // lần đầu gọi component thì hàm reducer sẽ kh đc gọi, check xem log
    console.log('running reducer');

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
  
    const handleUp = () => {
        return dispatch(UP_ACTION)
    }
    const handleDown = () => {
        return dispatch(DOWN_ACTION)

    }
  
  
  
    return (
      <div className="App">
        <h1> {counter}</h1>
        <button onClick={handleDown}>DOWN</button>
        <button onClick={handleUp}>UP</button>
      </div>
    );
}

  
export default App;
   