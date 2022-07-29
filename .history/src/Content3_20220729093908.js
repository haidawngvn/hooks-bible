import  { useEffect, useState } from 'react'


function Content3() {
    const [count, setCount] = useState(0)

    const handleRun = () => {
        setCount(count+1)
    }
    
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