import { useState } from 'react';

const PasswordToggle=()=>
{
    const [isPassword, showPassword]=useState(false);
    return(
        <div>
            <input type={isPassword ? "Text":"Passowrd"} placeholder="Wpisz haslo: "/>
            <button onClick={()=>showPassword(!isPassword)}/>
            {isPassword ? "Schowaj haslo":"Pokaz haslo"}
        </div>
    );
};

export default PasswordToggle;