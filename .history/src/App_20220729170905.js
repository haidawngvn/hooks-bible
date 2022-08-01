import  { useReducer } from 'react'

// 1. Init state
// Sẽ có 2 state, state của input để hiện lên cho user nhìn, state của list tasks
const initState = {
    job: '',
    jobs: []
}

// 2. Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload
    }
}

// 3. reducer 
const reducer = (state, action) => {

}

function App() {

    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs } = state

    return (
        <div>
            <h3>To Do</h3>
            <input 
                type="text" 
                placeholder='Enter task...' 
                value={job}
                onChange={e => {
                    dispatch(SET_JOB)
                }}
            />

            <button>ADD</button>

            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job} &times;
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App