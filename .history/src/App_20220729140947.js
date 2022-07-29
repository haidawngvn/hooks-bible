import  {  useState, useMemo } from 'react'

function App() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])
  
    const handleIncrease = () => {
      
      setCounter(prevState => prevState +1)
    }
  
  
  
    return (
      <div className="App">
        <h1> {counter}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <Content4 />
      </div>
    );
}

  
export default App;
  