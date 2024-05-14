import React from 'react'
import { Button } from './Button';



const DarkModeToggle = () => {
    const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }
    return (
        <Button onClick={() => darkModeHandler()} variant='solid' size='medium'>
            {dark && 'LightMode'}
            {
                !dark && 'Darkmode'}
        </Button>
    )
}

export default DarkModeToggle