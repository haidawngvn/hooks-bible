import  { useState } from 'react'


function App() {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState(() => {
        // mới vô thì vô localStorage xem có data ở trên không ===> lưu task khi reload trang
        const storageTasks = JSON.parse(localStorage.getItem('tasks'))
        // ?? : bên trái undefined hoặc null thì trả về vế phải
        return storageTasks ?? []
    })

    const handleAdd = () => {
        setTasks(tasks => {
            const newTasks = [...tasks, task]
            
            // save into localStorage
            const jsonTasks = JSON.stringify(newTasks)
            localStorage.setItem('tasks', jsonTasks)

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
