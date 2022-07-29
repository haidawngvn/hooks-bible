import  { useEffect, useLayoutEffect, useState, useRef } from 'react'

// useRef: khá giống useState (lưu các giá trị)
// nhưng khi setState để thay đổi giá trị thì sẽ re-render,
// còn thay đổi giá trị của ref thì kh phải re-render 
// Lưu các giá trị qua 1 tham chiếu bên ngoài
// return 1 object có key return bằng giá trị của biến đc gán, vd {current: timerId}
// có thể truyền vô 1 init value để làm giá trị khởi tạo cho current

// most common use: reference elements inside phần HTML  
// 2nd common use: store the previous value of the state

function App(){

    const [count, setCount] = useState(60)
    const [name, setName] = useState('')

    // nếu kh truyền init value vô useRef thì timerId.current lúc này là undefined
    const timerId = useRef()    
    const prevCount = useRef()
    const h1Ref = useRef()
    const inputRef = useRef()
    const prevName = useRef('')
    
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

    function focus() {
        inputRef.current.focus()
    }

    useEffect(() => {
        console.log(prevName.current, name);
        prevName.current = name
    }, [name])

    return(
        <div style={{ padding : 20 }}>
            <h1>vi du 1, f8</h1>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>

            <h1>vi du 2, most common use</h1>
            <input type="text" ref={inputRef} />
            <button onClick={focus}>Focus</button>
            
            <h1>vi du 3, 2nd common use</h1>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <div>My name is {name}, it used to be {prevName.current}</div>
        </div>
    )
}

export default App