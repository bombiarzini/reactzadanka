import React from 'react'; 
import { useState } from 'react';

 
const CityList = () => { 
    const List=({items, heading})=>{
        return(
            <div>
                <h2>{heading}</h2>

                {items.length===0 ?
                <p>Brak elementow</p>
                :
                 <ul> 
                {items.map((item, index) => ( 
                    <li key={index}>{item}</li> 
                ))} 
            </ul> 
                }
            </div>
        );
    }
            return(
                <div>
                    <List
                    items={["Nowy Jork", "Londyn", "Paryż"]}
                    heading="Miasta"
                    />
                    <List
                    items={[]}
                    heading="Imiona"
                    />
                </div>
            )
}; 

export default CityList;