import  { useEffect, useLayoutEffect } from 'react'


function Content3() {
    const [count, setCount] = useState(0)

    const handleRun = () => {
        setCount(count+1)
    }

    useEffect(() => {
        if (count > 3) {
            setCount(0)
        }
    },[count])

    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={handleRun}
            >
                Run
            </button>
        </div>
    )
}

export default Content3