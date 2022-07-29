import  { useEffect, useLayoutEffect, useState, useRef } from 'react'

// useRef: khá giống useState, nhưng khi setState để thay đổi giá trị thì sẽ re-render, 
// Lưu các giá trị qua 1 tham chiếu bên ngoài
// return 1 object có key return bằng giá trị của biến đc gán, vd {current: timerId}
// có thể truyền vô 1 init value

function App(){

    const [count, setCount] = useState(60)

    // nếu kh truyền init value vô useRef thì timerId.current lúc này là undefined
    const timerId = useRef()    
    const prevCount = useRef()
    const h1Ref = useRef()
    
    useEffect(() => {
        prevCount.current = count
    }, [count])

    console.log(count, prevCount.current)

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prev => prev -1)
        },1000)

        console.log('start', timerId.current);
    }
    
    
    const handleStop = () => {
        clearInterval(timerId.current)
        console.log('stop', timerId.current);
    }

    return(
        <div style={{ padding : 20 }}>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default App