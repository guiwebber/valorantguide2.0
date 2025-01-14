import React, { useState, useEffect } from "react";
import "./Mapas.css";

function Mapas() {
  const [data, setData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);  
  const [loadingImages, setLoadingImages] = useState(true);  

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("https://valorant-api.com/v1/maps");
      const result = await response.json();
      setData(result);
      setLoadingData(false);  
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

  const handleImageLoad = () => {
    setLoadingImages(false);  
  };
console.log(mapas)
  return (
    <div className="containerMainMaps">
      <div className="container">
        <h1 className="nameSection">Competitive maps</h1>
        
        {loadingData && <p className="msgCarregando">Carregando...</p>} 
        {!loadingData && loadingImages} 
        
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
                    onLoad={handleImageLoad} 
                  />
                  <img
                    className="mapaAberto"
                    src={mapa.displayIcon}
                    alt={mapa.displayName}
                    loading="lazy"
                    onLoad={handleImageLoad}  
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="container">
          <h1 className="nameSection">Team deathmatch maps</h1>
          
          {!loadingData && loadingImages}

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
                    onLoad={handleImageLoad}  
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

export default Mapas;
