import React, { useEffect, useState } from "react";
import "./Armas.css";

function Armas() {
  const [data, setData] = useState([]);
  const [selectedArma, setSelectedArma] = useState(null);
  const [loadingData, setLoadingData] = useState(true);  
  const [loadingImages, setLoadingImages] = useState(true);  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://valorant-api.com/v1/weapons");
      const result = await response.json();
      setData(result);
      setLoadingData(false);  
    };
    fetchData();
  }, []);

  const armas = data.data || [];

  const handleClick = (arma) => {
    setSelectedArma(arma);
  };

  const handleCloseModal = () => {
    setSelectedArma(null);
  };

  const handleImageLoad = () => {
    setLoadingImages(false);  
  };

  return (
    <div className="container">
      <h1>Guns</h1>

      {loadingData && <p className="msgCarregando">Carregando...</p>} 


      <div className="containerArmas">
        {armas.map((arma) => {
          const price = arma.shopData ? arma.shopData.cost : "0";
          return (
            <div
              className="divArmas"
              onClick={() => handleClick(arma)}
              key={arma.uuid}
            >
              <h1 className="nomeArma">{arma.displayName}</h1>
              <img
                className="imgArma"
                src={arma.displayIcon}
                alt={arma.displayName}
                loading="lazy"
                onLoad={handleImageLoad}  
              />
              <p className="preco">
                <b>Price:</b> {price}
              </p>
            </div>
          );
        })}
      </div>

      {selectedArma && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="conteudoModal" onClick={(e) => e.stopPropagation()}>
            <img className="modalImg" src={selectedArma.displayIcon} alt="" />
            <h1 className="nameAgenteModal">{selectedArma.displayName}</h1>
            <button className="btnFechar" onClick={handleCloseModal}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Armas;
