import  { useState } from 'react'

const gifts = [
    'Xe',
    'PC',
    'Laptop'
]


function App() {

  const [gift, setGift] = useState()

  function handleGetGift() {
    const index = Math.floor( Math.random*3 )
  }

  return (
    <div className="App">
        <h1>{ gift || 'Chưa có phần thưởng'}</h1>
        <button onclick={handleGetGift}>Lấy thưởng</button>
    </div>
  );
}

export default App;
