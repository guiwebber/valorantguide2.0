import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

import "./Navbar.css";
function Navbar() {
  const [isChecked, setIsChecked] = useState(false); // Estado para controlar o checkbox

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked); // Atualiza o estado baseado no checkbox
  };

  function handleMobOpen() {
      setIsChecked(false)
    
  }

  useEffect(() => {
    if (isChecked) {
      document.body.style.overflow = "hidden"; // Bloqueia o scroll
    } else {
      document.body.style.overflow = "auto"; // Permite o scroll
    }
  }, [isChecked]); // A dependência é o isChecked

  return (
    <div className={`containerNavbar containerMobile ${isChecked}`}>
      <div className="divLogo">
        <Link className="logo" to="/">
          <p>VALORANT</p>
          <span className="span">GUIDE</span>
        </Link>
      </div>

      <div className="nav">
        <ul className="navList">
          <li>
            <Link onClick={handleMobOpen} className="linksNav" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleMobOpen} className="linksNav" to="/agentes">
              Agentes
            </Link>
          </li>
          <li>
            <Link onClick={handleMobOpen} className="linksNav" to="/armas">
              Armas
            </Link>
          </li>
          <li>
            <Link onClick={handleMobOpen} className="linksNav" to="/mapas">
              Mapas
            </Link>
          </li>
          <li>
            <Link onClick={handleMobOpen} className="linksNav" to="/ranks">
              Ranks
            </Link>
          </li>
          <li>
            <Link onClick={handleMobOpen} className="linksNav" to="/sobre">
              Sobre
            </Link>
          </li>
        </ul>
      </div>

      <div className="download">
        <button className="btnDownload">
          {" "}
          <a href="#">
            <FaDownload className="iconDownload" />
            Download
          </a>
        </button>
      </div>

      <div className="divHamburguer">
        <input
          type="checkbox"
          className="inputHamburguer"
          checked={isChecked} // Aplica o estado ao checkbox
          onChange={handleCheckboxChange} // Define o evento para mudança
        />
        <span className="menuHamburguer"></span>
      </div>

      <div className="mobOpen">
        <div className="nav">
          <ul className="navList">
            <li>
              <Link className="linksNav" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="linksNav" to="/agentes">
                Agentes
              </Link>
            </li>
            <li>
              <Link className="linksNav" to="/armas">
                Armas
              </Link>
            </li>
            <li>
              <Link className="linksNav" to="/mapas">
                Mapas
              </Link>
            </li>
            <li>
              <Link className="linksNav" to="/ranks">
                Ranks
              </Link>
            </li>
            <li>
              <Link className="linksNav" to="/sobre">
                Sobre
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
