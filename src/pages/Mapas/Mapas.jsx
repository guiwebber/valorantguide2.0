import React from "react";
import { useState, useEffect } from "react";
import "./Mapas.css";
function Armas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("https://valorant-api.com/v1/maps");
      const result = await response.json();
      setData(result);
    };
    fetchdata();
  }, []);
  const mapas =
    data.data?.filter(
      (mapa) =>
        mapa.displayName != "The Range" && mapa.displayName != "Basic Training"
    ) || [];
    
  console.log(mapas);
  return (
    <div className="containerMapas">
      {mapas.map((mapa) => {
        return (
          <div className="divMapa" key={mapa.uuid}>
            <h1 className="nomeMapa">{mapa.displayName}</h1>
            <img className="imgMapa" src={mapa.splash} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default Armas;
