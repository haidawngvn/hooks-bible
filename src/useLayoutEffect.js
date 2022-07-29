import  { useState } from 'react'
import Content3 from './Content3';

function App() {
    const [show, setShow] = useState(false)
  
    return (
        <div className="App">
            <button
                onClick={() => setShow(!show)}
            >
                {show ? 'Hide' : 'Show'}
            </button>
            { show && <Content3/>}
            
        </div>
    );
}

export default App;
