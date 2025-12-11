import { useState } from "react"; 

const Alert = ({ message, onClose }) => { 
    const [alertVisible, setAlertVisible] = useState(false); 

    const handleClick=()=>{
        setAlertVisible(true);
        setTimeout(()=> setAlertVisible(false), 1000);
    }

    return ( 
        <div>  
            <button className="btn btn-primary" onClick={handleClick}> 
                 Pokaż Alert 
            </button> 

            {alertVisible && 
               <Alert message="To jest alert!" />}
        </div> 
    ); 
}; 

export default Alert;
 