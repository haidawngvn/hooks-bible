import  { useState } from 'react'


function App() {

  // cú pháp của useState
  // const [state, setState] = useState(initState)
  const [counter, setCounter] = useState(1)

  const handleIncrease = () => {
    // khi setCounter thì react sẽ gọi lại component App này
    // ====> Component sẽ re-render sau khi setState
    
    // setCounter(counter + 1)
    // khi gọi 3 lần như này, counter vẫn chỉ +1 sau khi bấm increase
    
    setCounter(prevState => prevState +1)
    // khi gọi 3 lần như này, counter cộng +3 sau khi bấm increase
  }

  return (
    <div className="App">
      <h1> {counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
