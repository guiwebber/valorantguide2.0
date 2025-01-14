import React, { useEffect, useState } from "react";
import "./Home.css";
import brim from "../../assets/brim.png";
import video from "../../assets/video.mp4";
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("https://valorant-api.com/v1/events");
      const result = await response.json();
      setData(result);
    };
    fetchdata();
    console.log(data.data);
  }, []);
  return (
    <div className="containerHome">
      <div className="subContainer">
        <div className="fundoVideo">
          <video className="video" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="containerContent">
          <div className="textHome">
            <h2>Bem vindo ao</h2>
            <h1 className="h1logo">VALORANT GUIDE</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              error enim repellendus reprehenderit quia, illo adipisci ad dolor
              ullam quis asperiores? Unde, aperiam tempore debitis eveniet
              dolorem sequi sapiente at!
            </p>
          </div>
          <div className="imgHome">
            <img src={brim} alt="IMG brimstone" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
