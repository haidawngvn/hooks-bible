import  { useState } from 'react'
function App() {


  // cú pháp của useState
  // const [state, setState] = useState(initState)
  const [counter, setCounter] = useState(1)
  return (
    <div className="App">
      <h1> {counter}</h1>
    </div>
  );
}

export default App;
