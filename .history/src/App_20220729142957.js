import  {  useState, useMemo } from 'react'

// useMemo : tránh lặp lại các logic không cần thiết

function App() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])
  
    const handleSubmit = () => {
        // từ tag input sẽ nhận đc chuỗi ==> convert thành int
        setProducts([...products, {name, price: parseInt(price)}])

        setName('')
        setPrice('')
    }

    // phần tính toán này sẽ đc chạy mỗi lần re-render
    // mà phần nhập đang 2waybinding 
    // ===> nhập input cũng re-render ===> tính toán kể cả khi chi đang nhập input ==> tính toán thừa ===> chỉ khi bấm add mới cần tính
    // const total = products.reduce((total, product) => total + product.price, 0)
    
    // đối số đầu tiên là 1 callback
    // deps rỗng [] thì sẽ tính toán 1 lần, mọi lần sau sẽ trả về kqua tính lần đầu
    // có deps, deps thay đổi thì sẽ tính toán lại 
    const total = useMemo(() => {
        const result = products.reduce((total, product) => total + product.price, 0)
        return result
    }, [products])
    
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
        Total: {total}
        <ul>
            {products.map((product, index) => (
                <li key={index}>{product.name} - {product.price}</li>
            ))}
        </ul>
      </div>
    );
}

  
export default App;
  