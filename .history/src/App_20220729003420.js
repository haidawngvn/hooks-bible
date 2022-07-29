import  { useState } from 'react'


function App() {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])

    const handleAdd = () => {
        setTasks(tasks => {
            const newTasks = [...tasks, task]
            // save into localStorage
            const jsonTasks = JSON.stringify(newTasks)
            console.log(jsonTasks);
            return newTasks
        })
        setTask('')

    }

    return (
        <div className="App">
            <input 
                type="text" 
                value={task} 
                onChange= {e => setTask(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
