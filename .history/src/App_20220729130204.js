import  { useEffect, useLayoutEffect, useState, useRef } from 'react'


function App() {

    // cú pháp của useState
    // const [state, setState] = useState(initState)
    const [counter, setCounter] = useState(0)
  
    const handleIncrease = () => {
      
      
      setCounter(prevState => prevState +1)
    }
  
  
  
    return (
      <div className="App">
        <h1> {counter}</h1>
        <button onClick={handleIncrease}>Increase</button>
      </div>
    );
}

  
export default App;
  