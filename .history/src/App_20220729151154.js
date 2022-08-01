import  { useEffect, useLayoutEffect, useState, useRef, memo } from 'react'
import Content4 from './Content4'

// useReducer: giống với useState nhưng cho những bài toán có state phức tạp (object nhiều cấp, nhiều mảng lồng nhau)

// Các bước khi sd useReducer
// 1. init state
// 2. Actions to set state
// 3. Reducer
// 4. Dispatch


function App() {

    const [counter, setCounter] = useState(0)
  
    const handleIncrease = () => {
      
      setCounter(prevState => prevState +1)
    }
  
  
  
    return (
      <div className="App">
        <h1> {counter}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <Content4 />
      </div>
    );
}

  
export default App;
   