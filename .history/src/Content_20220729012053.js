import  { useEffect, useState } from 'react'


// 3 TH cua useEffect:
//   1. useEffect(callback)
//      - Gọi callback mỗi khi component re-render (setState) (1)
//      - Gọi callback sau khi component thêm element vào DOM (sau khi phần element trong return đc thêm vào DOM) (2)
//   2. useEffect(callback, []) deps empty
//   3. useEffect(callback, [deps])

// cả 3 TH:
//      +callback luôn đc gọi sau khi component mounted


function Content() {
    
    const [state, setState] = useState('')
    
    useEffect(() => {
        console.log('Mounted'); //(2)
    })

    return(
        <div>
            <input
                value={state}
                onChange={e => setState(e.target.value) } // (1)
            />
            {console.log('Render')} {/* (2) */} 
             
        </div>
    )
}

export default Content