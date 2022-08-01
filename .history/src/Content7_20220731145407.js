import {useContext} from 'react'
import {ThemeContext} from './ThemeContext'


function Content7() {

    const theme = useContext(ThemeContext)

    console.log(theme);
    return (
        <div className={theme}>
            This is content 7
        </div>
    )
}

export default Content7;