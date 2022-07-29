import  { useEffect, useLayoutEffect, useState, useRef, memo } from 'react'
import Content5 from './Content5'
// useCallback()

function App() {

    const [counter, setCounter] = useState(0)
  
    const handleIncrease = () => {
      
      setCounter(prevState => prevState +1)
    }
  
  
  
    return (
        <div className="App">

            <Content5 onIncrease = {handleIncrease}/>
            <h1> {counter}</h1>
        </div>
    );
}

  
export default App;
  