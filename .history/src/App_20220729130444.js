import  { useEffect, useLayoutEffect, useState, useRef, memo } from 'react'

// memo() là 1 HOC (Higher Order Component)


function App() {

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
  