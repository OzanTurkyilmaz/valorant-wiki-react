import { Button , Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Agents.css";

export default function Agents() {
  const [agents, setAgents] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
      .then((response) => response.json())
      .then((results) => 
      setAgents(results.data),
      setLoading(false)
      );
      
  }, []);

  return ( loading ? <Spin size="large" /> :
    
     
  <div className="agents">
      {agents?.map((agent) => (
        agent.fullPortrait != null &&
        <div key={agent.uuid} className="agents_card">
        <div
          className="img_container"
          style={{
            backgroundImage:
            `url(${agent.background})`,
          }}
        >
          <img
            className="agent_img"
            src={`${agent.fullPortrait}`}
            alt={`${agent.displayName}`}
          ></img>
        </div>
        <div className="agent_info">
          <h1 className="agent_name">{agent.displayName}</h1>
          <p>{agent.description}</p>
          <Link to={`/agents/${agent.displayName}`}>
          <Button type="primary" danger>
            Show Agent Details
          </Button>
          </Link>
          
        </div>
      </div>
      ))}
    </div>
  
    



  )  
  ;
}
