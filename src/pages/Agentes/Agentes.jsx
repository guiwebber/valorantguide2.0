import React, { useEffect, useState, useMemo } from "react";
import "./Agentes.css";

function Agentes() {
  const [data, setData] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Começa o carregamento
      const response = await fetch("https://valorant-api.com/v1/agents");
      const result = await response.json();
      setData(result);
      setLoading(false); // Finaliza o carregamento assim que os dados são obtidos
    };
    fetchData();
  }, []);

  const agentes = useMemo(() => {
    return (
      data.data?.filter((agente) => agente.isPlayableCharacter === true) || []
    );
  }, [data.data]);

  const handleClick = (agente) => {
    setSelectedAgent(agente);
  };

  const handleCloseModal = () => {
    setSelectedAgent(null);
  };

  const handleImageLoad = () => {
    setLoading(false); // Marcar o carregamento como concluído quando a imagem for carregada
  };

  console.log(agentes);

  return (
    <div className="container">
      <h1>Agents</h1>
      {loading && <p className="msgCarregando">Carregando...</p>}

      <div className="containerAgentes">
        {agentes.map((agente) => {
          return (
            <div
              className={`divAgente ${agente.role.displayName}`}
              key={agente.uuid}
              onClick={() => handleClick(agente)}
            >
              <h1 className="nameAgente">{agente.displayName}</h1>
              <img className="backgroundAgente" src={agente.background} alt="" />
              <img
                className="imgAgente"
                src={agente.fullPortraitV2}
                loading="lazy"
                alt={agente.displayName}
                onLoad={handleImageLoad}
              />
              <p className="role">{agente.role.displayName}</p>
              <img
                className="imgRole"
                src={agente.role.displayIcon}
                loading="lazy"
                alt={agente.role.displayName}
              />
            </div>
          );
        })}
      </div>

      {selectedAgent && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="conteudoModal" onClick={(e) => e.stopPropagation()}>
            <img
              className="modalImg"
              src={selectedAgent.fullPortraitV2}
              alt={selectedAgent.displayName}
              onLoad={handleImageLoad}
            />
            <h1 className="nameAgenteModal">{selectedAgent.displayName}</h1>
            <p>{selectedAgent.description}</p>
            <div className="habilidades">
              {selectedAgent.abilities
                .filter((habilidade) => habilidade.slot !== "Passive")
                .map((habilidade, index) => (
                  <div key={index} className="umaHabilidade">
                    <img
                      className="iconHabilidade"
                      src={habilidade.displayIcon}
                      alt=""
                    />
                    <p>{habilidade.displayName}</p>
                  </div>
                ))}
            </div>

            <button className="btnFechar" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Agentes;
