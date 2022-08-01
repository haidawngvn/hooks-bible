import  {  useContext, createContext, useState } from 'react'


const ThemeContext = createContext()

function ThemeProvider() {
    return (
        <ThemeContext.Provider value={theme}>

        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext } 