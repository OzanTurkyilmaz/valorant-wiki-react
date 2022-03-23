import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import "./Maps.scss";

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
      <Col span={12} className="name_box">
        {map.displayName}
      </Col>
      <Col span={12} className="img_box">
        <img alt="map" src={map.listViewIcon}>
        </img>
      </Col>
    </Row>
    )) }
    </div>
  );
}
