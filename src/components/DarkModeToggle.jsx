import { useState } from 'react';

const DarkModeToggle=()=>
{
    const [isDarkMode, showDarkMode]=useState(false);
    const DarkMode=()=>
    {
        showDarkMode(!isDarkMode);
    }

    return(
    <div className={isDarkMode ? "dark-mode":"light-mode"}>
        <button onClick={DarkMode}>
            {isDarkMode ? "Tryb jasny":"Tryb ciemny"}
        </button>
         
    </div>
    );
};

export default DarkModeToggle;