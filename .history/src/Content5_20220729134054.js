import  { useEffect, useLayoutEffect, useState, useRef, memo } from 'react'


function Content5() {

    console.log('content');
    return (
        <div>
            <h1>content4</h1>
        </div>
    )
}

export default memo(Content5)