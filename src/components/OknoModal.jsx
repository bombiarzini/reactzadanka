import { useState } from 'react';

const OknoModal=()=>
{
    const [isOpen, showOpen]=useState(false);

    const Modal=()=>
    {
        showOpen(!isOpen);
    }

    return(
    <div>
            <button onClick={Modal}>
            {isOpen ? "Zamknij":"Otworz"}
            </button>
            {isOpen && (
                <div>
                <h2>Modal</h2>
                <button onClick={Modal} >"Zamknij modal"</button>
                </div>
            )}
    </div>
    );
};

export default OknoModal;