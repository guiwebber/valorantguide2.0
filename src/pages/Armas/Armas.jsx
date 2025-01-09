import React from "react";
import "./Armas.css";
import { useEffect, useState } from "react";
function Armas() {
  const [data, setData] = useState([]);
  const [selectedArma, setSelectedArma] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("https://valorant-api.com/v1/weapons");
      const result = await response.json();
      setData(result);
    };
    fetchdata();
  }, []);
  const armas = data.data || [];

  const handleClick = (arma) => {
    setSelectedArma(arma);
  };

  const handleCloseModal = () => {
    setSelectedArma(null);
  };

  console.log(armas);
  return (
    <div className="container">
      <h1>Armas</h1>
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
                alt={arma.DisplayName}
                loading="lazy"
              />
              <p className="preco">
                <b>Price:</b> {price}
              </p>
            </div>
          );
        })}
      </div>

      {/* MODAL */}

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
