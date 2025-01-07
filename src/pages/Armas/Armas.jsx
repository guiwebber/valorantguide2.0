import React from "react";
import "./Armas.css";
import { useEffect, useState } from "react";
function Armas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("https://valorant-api.com/v1/weapons");
      const result = await response.json();
      setData(result);
    };
    fetchdata();
  }, []);
  const armas = data.data || [];

  console.log(armas);
  return (
    <div className="containerArmas">
      {armas.map((arma) => {
        return (
          <div className="divArmas" key={arma.uuid}>
            <p className="nomeArma">{arma.displayName}</p>
            <img className="imgArma" src={arma.displayIcon} alt={arma.DisplayName} />
          </div>
        );
      })}
    </div>
  );
}

export default Armas;
