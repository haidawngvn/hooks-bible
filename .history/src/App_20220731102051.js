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

const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

console.log(setJob());

// 3. reducer 
const reducer = (state, action) => {
    console.log('Action', action);
    console.log('Prev state', state);

    let newState

    switch(action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [ ...state.jobs, action.payload ]
            }
            break
        default:
            throw new Error(`Invalid action ${action.type}`);
    }

    console.log('New state:', newState);
    return newState
}

function App() {

    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs } = state

    const handleSubmit = () => {
        dispatch(addJob(job))
    }

    return (
        <div>
            <h3>To Do</h3>
            <input 
                type="text" 
                placeholder='Enter task...' 
                value={job}
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />

            <button onClick={handleSubmit}>ADD</button>

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