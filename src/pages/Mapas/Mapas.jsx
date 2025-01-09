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
        mapa.displayName !== "The Range" && mapa.displayName !== "Basic Training"
    ) || [];

  const competitiveMaps =
    mapas?.filter((competitiveMap) =>
      [
        "Split",
        "Breeze",
        "Ascent",
        "Icebox",
        "Pearl",
        "Haven",
        "Lotus",
        "Sunset",
        "Abyss",
        "Bind",
        "Fracture",
      ].includes(competitiveMap.displayName)
    ) || [];

  const tdmMaps =
    mapas?.filter((tdmMaps) =>
      ["Kasbah", "Glitch", "Piazza", "Drift", "District"].includes(
        tdmMaps.displayName
      )
    ) || [];

  return (
    <div className="containerMainMaps">
      <div className="container">
        <h1>Competitive maps</h1>
        <div className="containerMapas">
          {competitiveMaps.map((mapa) => {
            return (
              <div className="divMapa" key={mapa.uuid}>
                <h1 className="nomeMapa">{mapa.displayName}</h1>
                <div className="imagesMapas">
                  <img
                    className="imgMapa"
                    src={mapa.splash}
                    alt={mapa.displayName}
                    loading="lazy" 
                  />
                  <img
                    className="mapaAberto"
                    src={mapa.displayIcon}
                    alt={mapa.displayName}
                    loading="lazy" 
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="container">
          <h1>Team deathmatch maps</h1>
          <div className="containerMapas">
            {tdmMaps.map((mapa) => {
              return (
                <div className="divMapa" key={mapa.uuid}>
                  <h1 className="nomeMapa">{mapa.displayName}</h1>
                  <img
                    className="imgMapa"
                    src={mapa.splash}
                    alt={mapa.displayName}
                    loading="lazy" 
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Armas;
