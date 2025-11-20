import React from 'react'; 
import { useState } from 'react';

const TextToggle=()=>
{
    const [tekst, tekstKlik]=useState();

    const TextToggle1=()=>
    {tekstKlik(!tekst);}
    return(
        <div>
            <button onClick={TextToggle1}>
                {tekst ? "Wyłącz":"Pokaż"}
            </button>
                {tekst && (
                    <div>
                        <p>"dodatkowy"</p>
                    </div>
                )}
        </div>       
    );
    
}
export default TextToggle;