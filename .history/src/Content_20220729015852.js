import  { useEffect, useState } from 'react'


// 3 TH cua useEffect:
//   1. useEffect(callback)
//      - Gọi callback mỗi khi component re-render (setState) (1)
//      - Gọi callback sau khi component thêm element vào DOM (sau khi phần element trong return đc thêm vào DOM) (2)
//   2. useEffect(callback, []) deps empty
//      - Chỉ gọi callback 1 lần sau khi component mounted
//   3. useEffect(callback, [deps])

// cả 3 TH:
//      +callback luôn đc gọi sau khi component mounted


function Content() {
    
    const [state, setState] = useState('')
    const [posts, setPosts] = useState([])

    // TH 1
    // useEffect(() => {
    //     console.log('Mounted'); //(2)
    //     document.title = state
    // })

    // Vấn đề của TH 1
    // ví dụ chỉ có callback mà gọi api như này để lấy data render ra view
    // api sẽ được gọi vô hạn vì khi lấy đc data, setState sẽ đc dùng để thay đổi state
    // mà setState sẽ re-render, mỗi khi re-render ==> lại vô useEffect để chạy callback (lý thuyết)
    // useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => res.json())
        //     .then(posts => {
        //         setPosts(posts)
        //     })
    // })

    // TH 2
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [])

    return(
        <div>
            <input
                value={state}
                onChange={e => setState(e.target.value) } // (1)
            />
            {console.log('Render')} {/* (2) */} 
            
            <ul>
                {posts.map((post, index) => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Content