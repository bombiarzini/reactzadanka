import React from 'react'; 
import { useState } from 'react';

const Button = ({ text="Kliknij"}) => { 

    return ( 

        <button 
        onClick={()=> console.log("Jedno klikniecie")}
        onDoubleClick={()=> console.log("Dwa klikniecia")}
        style={{
            backgroundColor: "yellow",
            padding: "35px",
            borderRadius:"5px",
            border:"2px solid"
        }}
>      {text} 

        </button> 

    ); 

}; 
export default Button;