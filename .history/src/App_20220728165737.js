import  { useState } from 'react'


function App() {

  // cú pháp của useState
  // const [state, setState] = useState(initState)
  const [counter, setCounter] = useState(1)

  const handleIncrease = () => {
    // khi setCounter thì react sẽ gọi lại component App này
    setCounter(counter + 1)
  }

  return (
    <div className="App">
      <h1> {counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
