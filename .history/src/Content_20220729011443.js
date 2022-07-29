import  { useEffect } from 'react'


// 3 TH cua useEffect:
//   1. useEffect(callback)
//      - Gọi callback mỗi khi component re-render (setState)
//      - Gọi callback sau khi component thêm element vào DOM (sau khi phần element trong return đc thêm vào DOM)
//   2. useEffect(callback, []) deps empty
//   3. useEffect(callback, [deps])

// cả 3 TH:
//      +callback luôn đc gọi sau khi component mounted


function Content() {

    


    return(
        <h1>Hidasdsa</h1>
    )
}

export default Content