import React from 'react'; 
import { useState } from 'react';

const LoginForm=()=>
{
    const [tekst, tekstKlik]=useState();

    const LoginForm1=()=>
    {tekstKlik(!tekst);}
    return(
        <div>
            <button onClick={LoginForm1}>
                {tekst ? "Wyloguj":"Zaloguj"}
            </button>
                {tekst && (
                    <div>
                        <input type="text" name="Email"></input><br></br>
                        <input type="password" name="Password"></input>
                    </div>
                )}
        </div>       
    );
    
}
export default LoginForm;