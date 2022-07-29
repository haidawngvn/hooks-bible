import  { useEffect, useLayoutEffect, useState, useRef, memo } from 'react'


function Content5({onIncrease}) {

    console.log('content');
    return (
        <div>

            <h1>content4</h1>
            <button onClick={onIncrease}>Click me</button>
        </div>
    )
}

export default memo(Content5)