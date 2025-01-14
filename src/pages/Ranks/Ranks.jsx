import React, { useState, useEffect } from "react";
import "./Ranks.css";

function Armas() {
  const [data, setData] = useState([]);
  const [loadingData, setLoadingData] = useState(true); 
  const [loadingImages, setLoadingImages] = useState(true); 

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(
        "https://valorant-api.com/v1/competitivetiers"
      );
      const result = await response.json();
      setData(result);
      setLoadingData(false); 
    };
    fetchdata();
  }, []);

  const ranks = data.data || [];

  const arrayRanks = ranks[4];
  const tiers = arrayRanks ? arrayRanks.tiers : [];
  const tiersFiltered = tiers.filter((tier) => {
    return (
      tier.tierName !== "UNRANKED" &&
      tier.tierName !== "Unused1" &&
      tier.tierName !== "Unused2"
    );
  });

  const handleImageLoad = () => {
    setLoadingImages(false); 
  };

  console.log(ranks)
  return (
    <div className="container">
      <h1 className="nameSection">Ranks</h1>

      {loadingData && <p className="msgCarregando">Carregando...</p>} 

      <div className="containerRanks">
        {tiersFiltered.map((tier, index) => {
          console.log(tier.backgroundColor)
          return (
            <div className="divRanks" style={{ backgroundColor: '#'+tier.backgroundColor }} key={index}>
              <div className="textName">

              <h1 className="nameRanks">{tier.tierName}</h1>
              </div>
              <div className="divImgRanks">

              <img
                className="imgRanks"
                src={tier.largeIcon}
                loading="lazy"
                alt="Imagem dos ranks"
                onLoad={handleImageLoad}
                />
                </div>
              {loadingImages && <p>Carregando imagens...</p>} 
              <p className="textTier">
                Tier: <span className="red">{tier.tier - 2}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Armas;
