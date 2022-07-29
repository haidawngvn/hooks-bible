import  { useEffect, useLayoutEffect, useState, useRef, memo, useCallback } from 'react'
import Content5 from './Content5'

// useCallback()
// Giúp tránh tạo ra những hàm mới một cách không cần thiết trong function component

function App() {

    const [counter, setCounter] = useState(0)
  
    // nếu không dùng useCallback, mỗi lần th cha re-render thì sẽ tạo ra 1 hàm mới và truyền vô th con
    // ===> th con sẽ re-render theo dù có memo()
    // const handleIncrease = () => {
    //   setCounter(prevState => prevState +1)
    // }
    
    // nếu tham số thứ 2 là mảng rỗng [] thì
    const handleIncrease = useCallback(() => {
        setCounter(prevState => prevState +1)
    }, [])
  
  
    return (
        <div className="App">

            <Content5 onIncrease = {handleIncrease}/>
            <h1> {counter}</h1>
        </div>
    );
}

  
export default App;
  