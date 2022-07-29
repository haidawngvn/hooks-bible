import  { useEffect, useLayoutEffect, useState } from 'react'

// useRef
// Lưu các giá trị qua 1 tham chiếu bên ngoài

function App(){

    const [count, setCount] = useState (60)

    let timerId

    const handleStart = () => {
        timerId = setInterval(() => {
            setCount(prevCount => prevCount -1)
        },1000)
    }


    const handleStop = () => {
        clearInterval(timerId)
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