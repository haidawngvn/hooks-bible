import  { useState } from 'react'

const gifts = [
    'Xe',
    'PC',
    'Laptop'
]


function App() {

  const [gift, setGift] = useState()

  return (
    <div className="App">
        <h1>Chưa có phần thưởng</h1>
        <button>Lấy thưởng</button>
    </div>
  );
}

export default App;
