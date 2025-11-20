import { useState } from 'react';

const Counter=()=>
{
    const [counterr, setCounter]=useState(0);
    return(
        <div>
            <button onClick={()=>setCounter(counterr+1)}>Kliknij</button>
            <p>Licznik klikow: {counterr}</p>
        </div>
    );
};

export default Counter;