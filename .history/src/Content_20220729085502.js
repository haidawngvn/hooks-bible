import  { useEffect, useState } from 'react'


// mount: gắn vô DOM    ||    mounted: đã đc gắn vô DOM 
// unmount: gỡ khỏi DOM

// 3 TH cua useEffect:
//   1. useEffect(callback)
//      - Gọi callback mỗi khi component re-render (setState) (1)
//      - Gọi callback sau khi component thêm element vào DOM (sau khi phần element trong return đc thêm vào DOM) (2)
//   2. useEffect(callback, []) deps empty
//      - Chỉ gọi callback 1 lần sau khi component mounted
//   3. useEffect(callback, [deps])
//      - Callback sẽ đc gọi lại mỗi khi deps thay đổi

// cả 3 TH:
//      - callback luôn đc gọi sau khi component mounted
//      - Cleanup function luôn đc gọi trc khi component unmounted
//      - Cleanup function luôn đc gọi trc khi callback đc gọi (trừ lần mounted)


const tabs = ['posts' , 'todos', 'albums']

function Content() {
    
    const [state, setState] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

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
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(posts => {
    //             setPosts(posts)
    //         })
    // }, [])

    // TH 3
    // useEffect(() => {
    //     console.log('cccc');
    //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //         .then(res => res.json())
    //         .then(posts => {
    //             setPosts(posts)
    //         })
    // }, [type])

    // useEffect(() => {

    //     const handleScroll = () => {
    //         if (window.scrollY >= 200) {
    //             setShowGoToTop(true)
    //         }
    //         else {
    //             setShowGoToTop(false)

    //         }
    //     }

    //     window.addEventListener('scroll', handleScroll)
    //     // nếu không removeEventListener, khi component này bị unmount, thì eventListener này vẫn kh đc gỡ bỏ
    //     // và vẫn lắng nghe hành động ====> memory leak
    //     // nên khi nào unmount thì cần removeEventListener
        
    //     // cleanup function
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)
    //     }
    // }, [])


    // return(
    //     <div>
    //         {tabs.map((tab, i) => (
    //             <button 
    //                 key= {tab}
    //                 onClick={() => setType(tab)}
    //                 style={
    //                     type === tab ? {fontWeight: 'bold'} : {}
    //                 }
    //             >
    //                 {tab}
    //             </button>
    //         ))}

    //         <input
    //             value={state}
    //             onChange={e => setState(e.target.value) } // (1)
    //         />
    //         {console.log('Render')} {/* (2) */} 
            
    //         <ul>
    //             {posts.map((post, index) => (
    //                 <li key={post.id}>
    //                     {post.title}
    //                 </li>
    //             ))}
    //         </ul>

    //         {showGoToTop && (
    //             <button
    //                 style={
    //                     {padding: '30px', 
    //                     backgroundColor: 'blue',
    //                     position: 'fixed',
    //                     right: '20px',
    //                     bottom: '20px',
    //                     }
    //                 }
    //             >
    //                 GoToTop
    //             </button>
    //         )}
    //     </div>
    // )

    // --------------------------------
    // useEffect with timer function
    // const [countdown, setCountdown] = useState(180)

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setCountdown(prevState => prevState -1 )
    //         console.log();
    //     }, 1000)

    //     return () => clearInterval(timer)
    // }, [])

    // return (
    //     <div>
    //         <h1>{countdown}</h1>
    //     </div>
    // )

    // --------------------------------

    const [avatar, setAvatar] = useState()

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }

    useEffect(() => {
        return () =>  {
            avatar && URL.revokeObjectURL(avatar.preview)
        } 
    }, [avatar])

    return (
        <div>
            <input 
                type="file" 
                onChange={handlePreviewAvatar}
            />
            { avatar && (
                <img src={avatar.preview} alt="" />
            )}
        </div>
    )
}

export default Content