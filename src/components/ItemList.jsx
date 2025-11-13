import React from 'react'; 
import { useState } from 'react';

const ItemList = () => { 

const items = ["Jabłko", "Banan", "Gruszka"]; 
const [click, setClick] = useState(-1); 

 return ( 
<ul>
    {items.map((item, index) => ( 
      <li key={index} className={click === index ? "active" : ""}
      onClick={(click===index)
      ? () => setClick(-1)
      : () => setClick(index)}
      >
    {item}
      </li>
    ))}
</ul>
 
 ); 

}; 


export default ItemList; 