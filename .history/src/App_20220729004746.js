import  { useState } from 'react'


function App() {

  
  return (
    <div className="App">
      <h1> {counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
