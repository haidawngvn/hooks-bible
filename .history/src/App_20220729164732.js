import  { useReducer } from 'react'

// 1. Init state
// Sẽ có 2 state, state của input để hiện lên cho user nhìn, state của list tasks

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