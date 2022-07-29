import  {  useState, useMemo } from 'react'

function App() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])
  
    const handleSubmit = () => {
        // từ tag input sẽ nhận đc chuỗi ==> convert thành int
        setProducts([...products, {name, price: parseInt(price)}])
    }

    console.log(products);
  
  
  
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
        <br />
        Total:
        <ul>
            {products.map((product, index) => (
                <li key={index}>{product.name} - {product.price}</li>
            ))}
        </ul>
      </div>
    );
}

  
export default App;
  