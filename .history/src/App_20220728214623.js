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

// VÍ DỤ 2: radio
// function App() {

//     const [checked, setChecked] = useState()

//     const handleSubmit = () => {
//         console.log(checked);

//     }

//     return (
//         <div className="App">
//             {courses.map(course => (
//                 <div key={course.id} >
//                     <input 
//                         type="radio"
//                         onChange={() => setChecked(course.id)} 
//                         checked={course.id === checked }
//                     />
//                     {course.name}
//                 </div>
//             ))}

//             <button onClick={handleSubmit}>Submit</button>
//         </div>
//     );
// }

// VÍ DỤ 2: checkbox
function App() {

    const [checked, setChecked] = useState([])

    const handleSubmit = () => {
        console.log(checked);
    }

    function handleSelect(id) {
        if (checked.includes(id)) {
            const checkedList = checked
            checkedList.splice(id,1)
            setChecked(checkedList)
        }
        else {
            setChecked(checked => {
                [...checked, id]
            })
        }
    }

    return (
        <div className="App">
            {courses.map(course => (
                <div key={course.id} >
                    <input 
                        type="checkbox"
                        onChange={handleSelect(course.id)} 
                        checked={checked.includes(course.id) ? true : false }
                    />
                    {course.name}
                </div>
            ))}

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default App;


// const [name, setName] = useState('')
// const [mail, setMail] = useState('')

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