import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './AgentsDetails.css'

export default function AgentsDetails() {
  const [agents, setAgents] = useState();
  const [loading, setLoading] = useState(true);
  const { displayName } = useParams();

  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
      .then((response) => response.json())
      .then((results) => setAgents(results.data), setLoading(false));
  }, []);

  const thisAgent = agents?.find((agent) => agent.displayName === displayName);

  return loading ? <Spin size="large" /> : 
    <div key={thisAgent?.displayName} className="thisAgent_container">
      <div className="img_box" style={{
            backgroundImage:
            `url(${thisAgent?.background})`
          }}>
        <img 
        className="thisAgent_img" 
        src={`${thisAgent?.bustPortrait}`}
        alt={`${thisAgent?.uuid}`}>
        </img>
      </div>
      <div className="thisAgent_info">
          <h1 className="thisAgent_name">{thisAgent?.displayName}</h1>
          <h3 className="thisAgent_role">Role: {thisAgent?.role.displayName}</h3>
          <p>{thisAgent?.role.description}</p>
          <div className="abilities_container">
            <h1 className="thisAgent_abilities">Abilities</h1>
            {thisAgent?.abilities.map((ability) => (
              <div className="abilities_box">
                {ability.slot ==="Ultimate" && <h3 className="ulti">{ability.slot}</h3>}
                <h3 className="ability_name">{ability.displayName}</h3>
                <p>{ability.description}</p>
              </div>
              

            ))}
          </div>
      </div>
    </div>;
}
