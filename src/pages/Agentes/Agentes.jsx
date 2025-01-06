import React from "react";
import "./Agentes.css";
import { useEffect, useState } from "react";
function Agentes() {
  const [data, setData] = useState([]);

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

  console.log(agentes);

  return (
    <div className="container">
      <h1>Agentes</h1>
      <div className="containerAgentes">
        {agentes.map((agente) => {
          return (
            <div className={`divAgente ${agente.role.displayName}`} key={agente.uuid}>
              <img className="imgAgente" src={agente.fullPortraitV2} alt="" />
              <h1 className="nameAgente">{agente.displayName}</h1>
              <p>{agente.role.displayName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Agentes;
