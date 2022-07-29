import  { useState } from 'react'

const gifts = [
    'Xe',
    'PC',
    'Laptop'
]


function App() {

  const [gift, setGift] = useState()

  function handleGetGift() {
    const index = Math.floor( Math.random() * gifts.length )
    
    setGift( gifts[index] )
  }

  return (
    <div className="App">
        <h1>{ gift || 'Chưa có phần thưởng'}</h1>
        <button onClick={handleGetGift}>Lấy thưởng</button>
    </div>
  );
}

export default App;
