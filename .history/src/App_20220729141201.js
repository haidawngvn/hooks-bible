import  {  useState, useMemo } from 'react'

function App() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])
  
    const handleSubmit = () => {
      
    }
  
  
  
    return (
      <div className="App">
        <input 
            type="text"
            value={name}
            placeholder='Enter name'
            onChange={e => setName(e.target.value)} 
        />
        <br />
        <input 
            type="text"
            value={price}
            placeholder='Enter price'
            onChange={e => setPrice(e.target.value)} 
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
}

  
export default App;
  