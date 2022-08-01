import  {  useContext, useState } from 'react'
import Content6 from './Content6'

// use context
// truyển dữ liệu từ component cha xuống con mà kh cần dùng props
// CompA => CompB => CompC 

function App() {

    const [theme, setTheme] = useState('dark') 

    return (
        <div>
            <button>Toggle theme</button>
            <Content6 theme={theme}/>
        </div>
    )
}

export default App