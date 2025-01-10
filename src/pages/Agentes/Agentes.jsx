import React, { useEffect, useState, useMemo } from "react";
import "./Agentes.css";

function Agentes() {
  const [data, setData] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null); // Novo estado para armazenar o agente selecionado

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("https://valorant-api.com/v1/agents");
      const result = await response.json();
      setData(result);
    };
    fetchdata();
  }, []);

  // Memoizando a lista de agentes filtrados
  const agentes = useMemo(() => {
    return (
      data.data?.filter((agente) => agente.isPlayableCharacter === true) || []
    );
  }, [data.data]); // Recalcular somente quando os dados mudarem

  const handleClick = (agente) => {
    setSelectedAgent(agente); // Atualiza o estado com o agente clicado
  };

  const handleCloseModal = () => {
    setSelectedAgent(null); // Fecha o modal, limpando o agente selecionado
  };
  console.log(agentes);

  return (
    <div className="container">
      <h1>Agentes</h1>
      <div className="containerAgentes">
        {agentes.map((agente) => {
          return (
            <div
              className={`divAgente ${agente.role.displayName}`}
              key={agente.uuid}
              onClick={() => handleClick(agente)} // Ao clicar, abre o modal
            >
              <h1 className="nameAgente">{agente.displayName}</h1>
              <img
                className="imgAgente"
                src={agente.fullPortraitV2}
                loading="lazy"
                alt={agente.displayName}
              />
              <p>{agente.role.displayName}</p>
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

      {/* Modal */}
      {selectedAgent && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="conteudoModal" onClick={(e) => e.stopPropagation()}>
            <img
              className="modalImg"
              src={selectedAgent.fullPortraitV2}
              alt={selectedAgent.displayName}
            />
            <h1 className="nameAgenteModal">{selectedAgent.displayName}</h1>
            <p>{selectedAgent.role.displayName}</p>
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
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Agentes;
