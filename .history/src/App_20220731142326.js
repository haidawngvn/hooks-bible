import  {  useContext } from 'react'
import Content6 from './Content6'

// use context
// truyển dữ liệu từ component cha xuống con mà kh cần dùng props
// CompA => CompB => CompC 

function App() {
    return (
        <div>
            <Content6 />
        </div>
    )
}