import React, { useEffect, useState } from "react";
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

  const agentes =
    data.data?.filter((agente) => agente.isPlayableCharacter === true) || [];

  const handleClick = (agente) => {
    setSelectedAgent(agente); // Atualiza o estado com o agente clicado
  };

  const handleCloseModal = () => {
    setSelectedAgent(null); // Fecha o modal, limpando o agente selecionado
  };

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
              <img className="imgAgente" src={agente.fullPortraitV2} loading="lazy"  alt="" />
              <p>{agente.role.displayName}</p>
              <img className="imgRole" src={agente.role.displayIcon} loading="lazy"  alt="" />
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
