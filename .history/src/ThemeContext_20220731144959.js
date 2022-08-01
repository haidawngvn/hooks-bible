import  {  useContext, createContext, useState } from 'react'


const ThemeContext = createContext()


function ThemeProvider() {
    
    const [theme, setTheme] = useState('dark') 

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')

    }

    return (
        <ThemeContext.Provider value={theme}>

        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext } 