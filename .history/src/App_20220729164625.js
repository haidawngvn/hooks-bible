import  { useReducer } from 'react'


function App() {
    return (
        <div>
            <h3>To Do</h3>
            <input type="text" placeholder='Enter task...' />
            <button>ADD</button>
            <ul>
                <li>Task A &times;</li>
                <li>Task B &times;</li>
                <li>Task C &times;</li>
            </ul>
        </div>
    )
}

export default App