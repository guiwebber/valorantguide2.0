import React, { useEffect, useState } from "react";
import "./Armas.css";

function Armas() {
  const [data, setData] = useState([]);
  const [selectedArma, setSelectedArma] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [loadingImages, setLoadingImages] = useState(true);
  const [skinIndex, setSkinIndex] = useState(0); // Armazenar o índice da skin selecionada

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
    setSkinIndex(0); // Resetando o índice da skin quando uma nova arma for selecionada
  };

  const handleCloseModal = () => {
    setSelectedArma(null);
  };

  const handleImageLoad = () => {
    setLoadingImages(false);
  };

  const handleLeftClick = (e) => {
    e.stopPropagation(); // Impede que o clique se propague para o modal
    if (selectedArma && selectedArma.skins.length > 0) {
      setSkinIndex((prevIndex) => Math.max(0, prevIndex - 1)); // Navegar para a skin anterior
    }
  };

  const handleRightClick = (e) => {
    e.stopPropagation(); // Impede que o clique se propague para o modal
    if (selectedArma && selectedArma.skins.length > 0) {
      setSkinIndex((prevIndex) =>
        Math.min(selectedArma.skins.length - 1, prevIndex + 1)
      ); // Navegar para a próxima skin
    }
  };

  // Função para garantir que a skin selecionada seja válida
  const isValidSkin = (skin) => {
    const standardSkinName = `Standard ${selectedArma?.displayName}`; // "Standard <nome da arma>"
    return (
      skin.displayName !== "Random Favorite Skin" &&
      skin.displayIcon !== null &&
      skin.displayName !== standardSkinName // Verifica se a skin não é a padrão
    );
  };

  // Função para obter a próxima skin válida
  const getValidSkin = (index) => {
    let nextIndex = index;
    let skin = selectedArma.skins[nextIndex];

    // Loop até encontrar uma skin válida ou sair do índice
    while (
      skin &&
      !isValidSkin(skin) // Se a skin não for válida, pega a próxima
    ) {
      nextIndex = nextIndex + 1;
      skin = selectedArma.skins[nextIndex];

      // Se chegar no final da lista de skins, volta para o primeiro índice
      if (!skin) {
        nextIndex = 0;
        skin = selectedArma.skins[nextIndex];
      }
    }

    return nextIndex;
  };

  console.log(armas);

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
          <button className="leftButton" onClick={handleLeftClick}>
            ←
          </button>
          <div className="conteudoModal">
            {selectedArma.skins && selectedArma.skins.length > 0 ? (
              (() => {
                const validSkinIndex = getValidSkin(skinIndex);
                const validSkin = selectedArma.skins[validSkinIndex];

                return validSkin ? (
                  <img
                    className="modalImg"
                    src={validSkin.displayIcon}
                    alt={validSkin.displayName}
                  />
                ) : (
                  <p>No valid skin available.</p>
                );
              })()
            ) : (
              <p>No skins available for this weapon.</p>
            )}
            <h1 className="nameAgenteModal">{selectedArma.displayName}</h1>
            <button className="btnFechar" onClick={handleCloseModal}>
              Fechar
            </button>
          </div>
          <button className="rightButton" onClick={handleRightClick}>
            →
          </button>
        </div>
      )}
    </div>
  );
}

export default Armas;
