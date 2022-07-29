import  { useEffect, useLayoutEffect, useState, useRef } from 'react'

// useRef
// Lưu các giá trị qua 1 tham chiếu bên ngoài
// return 1 object có key return bằng giá trị của biến đc gán, vd {current: timerId}

function App(){

    const [count, setCount] = useState (60)

    const timerId = useRef()    
    const prevCount = useRef()
    
    useEffect(() => {
        prevCount.current = count
    }, [count])

    console.log(count, prevCount.current)

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount -1)
        },1000)

        console.log('start', timerId.current);
    }
    
    
    const handleStop = () => {
        clearInterval(timerId.current)
        console.log('stop', timerId.current);
    }

    return(
        <div style={{ padding : 20 }}>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default App