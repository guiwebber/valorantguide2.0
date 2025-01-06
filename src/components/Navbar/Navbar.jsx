import React from "react";

import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="containerNavbar">
      <div className="divLogo">
        <Link className="logo" to="/">
          <p>VALORANT</p>
          <span className="span">GUIDE</span>
        </Link>
      </div>

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

      <div className="download">
        <button className="btnDownload">
          {" "}
          <a href="#">
          <FaDownload className="iconDownload" />
            Download</a>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
