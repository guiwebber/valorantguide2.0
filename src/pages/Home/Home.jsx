import React from "react";
import "./Home.css";
import brim from "../../assets/brim.png";
function Home() {
  return (
    <div className="containerHome">
      <div className="textHome">
        <h2>Bem vindo ao</h2>
        <h1 className="h1logo">VALORANT GUIDE</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga error enim
        repellendus reprehenderit quia, illo adipisci ad dolor ullam quis
        asperiores? Unde, aperiam tempore debitis eveniet dolorem sequi sapiente
        at!
      </div>
      <div className="imgHome">
        <img src={brim} alt="IMG brimstone" />
      </div>
    </div>
  );
}

export default Home;
