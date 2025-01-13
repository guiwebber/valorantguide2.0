import React, { useEffect, useState } from "react";
import "./Armas.css";

function Armas() {
  const [data, setData] = useState([]);
  const [selectedArma, setSelectedArma] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [loadingImages, setLoadingImages] = useState(true);
  const [skinIndex, setSkinIndex] = useState(0);

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
    setSkinIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedArma(null);
  };

  const handleImageLoad = () => {
    setLoadingImages(false);
  };

  const handleLeftClick = (e) => {
    e.stopPropagation();
    if (selectedArma && selectedArma.skins.length > 0) {
      setSkinIndex((prevIndex) => Math.max(0, prevIndex - 1));
    }
  };

  const handleRightClick = (e) => {
    e.stopPropagation();
    if (selectedArma && selectedArma.skins.length > 0) {
      setSkinIndex((prevIndex) =>
        Math.min(selectedArma.skins.length - 1, prevIndex + 1)
      );
    }
  };

  const isValidSkin = (skin) => {
    const standardSkinName = `Standard ${selectedArma?.displayName}`;
    return (
      skin.displayName !== "Random Favorite Skin" &&
      skin.displayIcon !== null &&
      skin.displayName !== standardSkinName
    );
  };

  const getValidSkin = (index) => {
    let nextIndex = index;
    let skin = selectedArma.skins[nextIndex];

    while (skin && !isValidSkin(skin)) {
      nextIndex = nextIndex + 1;
      skin = selectedArma.skins[nextIndex];

      if (!skin) {
        nextIndex = 0;
        skin = selectedArma.skins[nextIndex];
      }
    }

    return nextIndex;
  };

  const isLeftDisabled = skinIndex === 0;
  const isRightDisabled = skinIndex === (selectedArma?.skins.length - 1);

  // console.log(armas);
  console.log(skinIndex);

  return (
    <div className="container">
      <h1 className="nameSection">Guns</h1>

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
          
          <button disabled={isLeftDisabled} className="btnSkins btnLeft" onClick={handleLeftClick}>
            ←
          </button>
          <div className="conteudoModal">
            {selectedArma.skins && selectedArma.skins.length > 0 ? (
              (() => {
                const validSkinIndex = getValidSkin(skinIndex);
                const validSkin = selectedArma.skins[validSkinIndex];
                
                return (
                  validSkin && (
                    <>
                      <img
                        className="modalImg"
                        src={validSkin.displayIcon}
                        alt={validSkin.displayName}
                      />
                      <h1 className="nameAgenteModal">
                        {selectedArma.displayName}
                      </h1>
                      <p>{validSkin.displayName}</p>
                    </>
                  )
                );
              })()
            ) : (
              <p>No skins available</p>
            )}
            <button className="btnFechar" onClick={handleCloseModal}>
              Fechar
            </button>
          </div>
          <button disabled={isRightDisabled} className="btnSkins" onClick={handleRightClick}>
            →
          </button>
        </div>
      )}
    </div>
  );
}

export default Armas;
