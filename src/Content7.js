import {useContext} from 'react'
import {ThemeContext} from './ThemeContext'


function Content7() {

    const context = useContext(ThemeContext)

    console.log(context.theme);
    return (
        <div className={context.theme}>
            This is content 7
        </div>
    )
}

export default Content7;