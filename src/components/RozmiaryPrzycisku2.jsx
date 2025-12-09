import React from 'react'; 
import { useState } from 'react';

const Button = ({ text="Kliknij", size="large"}) => {
    const sizeClassMap={
        small: 'btn-sm',
        medium: '',
        large: 'btn-lg',
    } 

    const sizeClass=sizeClassMap[size] || '';
    const [currentSize, setCurrentSize] = React.useState(size);
    const handleSizeChange=(newSize)=>{
        setCurrentSize(newSize);
    }
    return (
        <>
        <button style={{fontSize: currentSize==='small' ? '10px' : currentSize==='large' ? '30px' : '20px' }}>{text}</button> <br></br>
        <button className={`btn ${sizeClassMap['small']}`} style={{backgroundColor: "yellow",padding: "15px",borderRadius:"5px",border:"2px solid"}} onClick={()=>handleSizeChange('small')}>Small</button>
        <button className={`btn ${sizeClassMap['medium']}`} style={{backgroundColor: "red",padding: "15px",borderRadius:"5px",border:"2px solid"}} onClick={()=>handleSizeChange('small')}>Medium</button>
        <button className={`btn ${sizeClassMap['large']}`} style={{backgroundColor: "green",padding: "15px",borderRadius:"5px",border:"2px solid"}} onClick={()=>handleSizeChange('small')}>Large</button>

        </> 
    ); 

}; 
export default Button;