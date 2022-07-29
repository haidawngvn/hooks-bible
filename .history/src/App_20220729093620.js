import  { useState } from 'react'
import Content from './Content';
import Content2 from './Content2';

function App() {
    const [show, setShow] = useState(false)
  
    return (
        <div className="App">
            <button
                onClick={() => setShow(!show)}
            >
                {show ? 'Hide' : 'Show'}
            </button>
            { show && <Content/>}
            { show && <Content2/>}
            
        </div>
    );
}

export default App;
