import React from 'react'
import { Button } from './Button';

const DarkModeToggle = () => {

    const [dark, setDark] = React.useState(false);
    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    return (
        <Button onClick={() => darkModeHandler()} buttonText={dark ? 'LightMode' : 'Darkmode'} arrow={false} />
    )
}

export default DarkModeToggle