import React from 'react'
import { useState, useEffect } from 'react';
import "./Sobre.css"
function Armas() {
   const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchdata = async () => {
        const response = await fetch("https://valorant-api.com/v1/currencies");
        const result = await response.json();
        setData(result);
      };
      fetchdata();
    }, []);
    const currencies =
      data.data|| [];
      
    console.log(currencies);
  return (
    <div>
      {currencies.map((currencie, index) => {
        return (
          <div key={index}>
            <p>{currencie.displayName}</p>
            <img src={currencie.displayIcon} alt="" />
          </div>
        )
      })}
    </div>
  )
}

export default Armas
