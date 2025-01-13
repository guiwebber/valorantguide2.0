import React, { useState, useEffect } from "react";
import "./Ranks.css";

function Armas() {
  const [data, setData] = useState([]);
  const [loadingData, setLoadingData] = useState(true); // Estado para o carregamento dos dados
  const [loadingImages, setLoadingImages] = useState(true); // Estado para o carregamento das imagens

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(
        "https://valorant-api.com/v1/competitivetiers"
      );
      const result = await response.json();
      setData(result);
      setLoadingData(false); // Dados carregados
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
    setLoadingImages(false); // Quando as imagens forem carregadas, altera o estado
  };

  return (
    <div className="container">
      <h1 className="nameSection">Ranks</h1>

      {loadingData && <p className="msgCarregando">Carregando...</p>} {/* Mensagem de carregamento dos dados */}

      <div className="containerRanks">
        {tiersFiltered.map((tier, index) => {
          return (
            <div className="divRanks" key={index}>
              <h1 className="nameRanks">{tier.tierName}</h1>
              <img
                className="imgRanks"
                src={tier.largeIcon}
                loading="lazy"
                alt="Imagem dos ranks"
                onLoad={handleImageLoad} // Avisa quando a imagem for carregada
              />
              {loadingImages && <p>Carregando imagens...</p>} {/* Mensagem de carregamento das imagens */}
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
