import  { useState } from 'react'


function App() {
    const [tasks, setTasks] = useState([])

    return (
        <div className="App">
            <input type="text" />
            <button>Add</button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}></li>
                ))}
            </ul>
        </div>
    );
}

export default App;
