import React from "react";
import "./Ranks.css";
import { useState, useEffect } from "react";
function Armas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(
        "https://valorant-api.com/v1/competitivetiers"
      );
      const result = await response.json();
      setData(result);
    };
    fetchdata();
  }, []);
  const ranks = data.data || [];

  const arrayRanks = ranks[4];
  const tiers = arrayRanks ? arrayRanks.tiers : [];
  const tiersFiltered = tiers.filter((tier) => {
    return (
      tier.tierName !== "UNRANKED" &&
      tier.tierName !== "Unused1" &&
      tier.tierName !== "Unused2"
    );
  });

  console.log(tiersFiltered);

  return (
    <div className="containerRanks">
      {tiersFiltered.map((tier, index) => {
        return (
          <div className="divRanks" key={index}>
            <h1 className="nameRanks">{tier.tierName}</h1>
            <img className="imgRanks" src={tier.largeIcon} loading="lazy"  alt="Imagem dos ranks" />
            <p className="textTier">Tier: <span className="red">{tier.tier - 2}</span></p>
          </div>
        );
      })}
    </div>
  );
}

export default Armas;
