import React from "react";
import "./Sobre.css";
import Simbolo from "../../assets/logovalo.png";
function Armas() {
  return (
    <div className="containerSobre">
      <h1>Sobre</h1>
      <div className="textoSobre">
        <p>
          Valorant é um jogo de tiro tático em primeira pessoa (FPS)
          desenvolvido e publicado pela Riot Games. Lançado oficialmente em
          2020, o jogo combina mecânicas tradicionais de tiro com habilidades
          únicas de personagens, chamados "Agentes". Cada Agente possui
          habilidades distintas que podem ser usadas estrategicamente durante o
          jogo, criando uma experiência de jogo dinâmica e tática. O jogo é
          focado em partidas 5v5, onde os jogadores assumem o papel de atacantes
          ou defensores. Os atacantes devem plantar uma bomba (chamada "Spike"),
          enquanto os defensores tentam impedi-los. O objetivo é vencer rodadas,
          adquirindo dinheiro com base no desempenho e comprando armas e
          habilidades entre as rodadas. Valorant é conhecido por seu alto nível
          competitivo e foco na precisão, estratégia e trabalho em equipe. Com
          um design visual inspirado em mapas táticos e uma mecânica de jogo
          precisa, o jogo tem atraído uma enorme comunidade de jogadores e uma
          cena de eSports crescente.
        </p>
      </div>
      <img className="simbolo" src={Simbolo} alt="" />
    </div>
  );
}

export default Armas;
