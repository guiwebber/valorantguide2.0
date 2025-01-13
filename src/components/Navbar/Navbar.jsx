import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  function handleMobOpen() {
    setIsChecked(false);
  }

  return (
    <div className={`containerNavbar containerMobile ${isChecked ? 'true' : 'false'}`}>
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
              Agents
            </Link>
          </li>
          <li>
            <Link onClick={handleMobOpen} className="linksNav" to="/armas">
              Guns
            </Link>
          </li>
          <li>
            <Link onClick={handleMobOpen} className="linksNav" to="/mapas">
              Maps
            </Link>
          </li>
          <li>
            <Link onClick={handleMobOpen} className="linksNav" to="/ranks">
              Ranks
            </Link>
          </li>
          <li>
            <Link onClick={handleMobOpen} className="linksNav" to="/sobre">
              About
            </Link>
          </li>
        </ul>
      </div>

      <div className="download">
        <button className="btnDownload">
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
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className="menuHamburguer"></span>
      </div>

      <div className={`mobOpen ${isChecked ? 'show' : ''}`}>
        <div className="nav">
          <ul className="navList">
            <li>
              <Link className="linksNav" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="linksNav" to="/agentes">
                Agents
              </Link>
            </li>
            <li>
              <Link className="linksNav" to="/armas">
                Guns
              </Link>
            </li>
            <li>
              <Link className="linksNav" to="/mapas">
                Maps
              </Link>
            </li>
            <li>
              <Link className="linksNav" to="/ranks">
                Ranks
              </Link>
            </li>
            <li>
              <Link className="linksNav" to="/sobre">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
