import  { useEffect, useLayoutEffect, useState, useRef, memo } from 'react'
import Content4 from './Content4'
// memo() là 1 HOC (Higher Order Component)
// ghi nhớ lại các props của 1 component để quyết định xem có re-render component đó hay kh 
// ví dụ ở dưới, Content4 kh có prop nào ===> không bao h có thay đổi ===> không re-render khi component cha re-render

function App() {

    const [counter, setCounter] = useState(0)
  
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
  