import  { useState } from 'react'


// VÍ DỤ 1:
// const gifts = [
//     'Xe',
//     'PC',
//     'Laptop'
// ]


// function App() {

//     // initState lúc này là null
//     const [gift, setGift] = useState()

//     function handleGetGift() {
//         const index = Math.floor( Math.random() * gifts.length )
        
//         setGift( gifts[index] )
//     }

//     return (
//         <div className="App">
//             <h1>{ gift || 'Chưa có phần thưởng'}</h1>
//             <button onClick={handleGetGift}>Lấy thưởng</button>
//         </div>
//     );
// }


// VÍ DỤ 2:
const courses = [
    {
        id: 1,
        name: 'HTML'
    },
    {
        id: 2,
        name: 'CSS'
    },
    {
        id: 3,
        name: 'Javascript'
    },
]

function App() {

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')

    const handleSubmit = () => {

    }

    return (
        <div className="App">
            {courses.map(courses => (
                <div key={courses.id} >
                    <input type="radio" />
                </div>
            ))}

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default App;

{/* <input 
    type="text"
    value={name}
    onChange= {e => setName(e.target.value)} 
/>
<input 
    type="text"
    value={mail}
    onChange= {e => setMail(e.target.value)} 
/> */}