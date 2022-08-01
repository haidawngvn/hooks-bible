import  {  useContext, createContext, useState } from 'react'
import Content6 from './Content6'
import './App.css'


// use context
// truyển dữ liệu từ component cha xuống con mà kh cần dùng props
// CompA => CompB => CompC 

// 3 bước khi xài useContext
// 1. create context (tạo context từ A thì có thể chuyển từ A tới B hoặc C,D....)
//    CompA => CompB => CompC 
// 2. provider (thằng cung cấp dữ liệu)
// 3. consumer (thằng nhận dữ liệu)

// 1
const ThemeContext = createContext()

console.log(ThemeContext);

function App() {

    const [theme, setTheme] = useState('dark') 

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')

    }

    return (
        <div>
            <ThemeContext.Provider value={theme}>
                <button onClick={toggleTheme}>
                    Toggle theme
                </button>
                <Content6 theme={theme}/>
            </ThemeContext.Provider>
        </div>
    )
}

export default App