import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import "./Maps.css";

export default function Maps() {
  const [maps , setMaps] = useState() 

  useEffect(() => {
    fetch('https://valorant-api.com/v1/maps')
    .then(response => response.json())
    .then(data => setMaps(data.data))

  }, [])
  
  return (
    <div>
    {maps?.map(map => (
      <Row className="map_container">
      <Col span={6} className="name_box">
        {map.displayName}
      </Col>
      <Col span={18} className="img_box">
        <img alt="map" src={map.listViewIcon}>
        </img>
      </Col>
    </Row>
    )) }
    </div>
  );
}
