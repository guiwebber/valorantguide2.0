import React from "react";
import "./Sobre.css";
import Simbolo from "../../assets/logovalo.png";
function Armas() {
  return (
    <div className="containerSobre">
      <h1>About</h1>
      <div className="textoSobre">
        <p>
          Valorant is a tactical first-person shooter (FPS) game developed and
          published by Riot Games. Officially released in 2020, the game
          combines traditional shooting mechanics with unique character
          abilities, known as "Agents." Each Agent has distinct abilities that
          can be used strategically during the game, creating a dynamic and
          tactical gameplay experience. The game focuses on 5v5 matches, where
          players take on the roles of attackers or defenders. The attackers
          must plant a bomb (called the "Spike"), while the defenders try to
          prevent them. The objective is to win rounds, earning money based on
          performance and buying weapons and abilities between rounds. Valorant
          is known for its high level of competitiveness and focus on precision,
          strategy, and teamwork. With a visual design inspired by tactical maps
          and precise gameplay mechanics, the game has attracted a large player
          community and a growing eSports scene.
        </p>
      </div>
      <img className="simbolo" src={Simbolo} alt="" />
    </div>
  );
}

export default Armas;
