import { Button } from "antd";
import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="homepage_container">
      <div className="play_container">
        A 5v5 character-based tactical shooter
        <img
          className="text_img"
          src="https://i0.wp.com/www.hattsoffstore.com/wp-content/uploads/2020/07/Valorant-Merchandise-Banner.png?fit=1920%2C492&ssl=1"
          alt="valorant"
        ></img>
        <Button
          className="play_btn"
          type="primary"
          danger
          onClick={() =>
            window.open(
              "https://auth.riotgames.com/login#client_id=play-valorant-web-prod&nonce=MjIxLDgzLDQ3LDM5&prompt=signup&redirect_uri=https%3A%2F%2Fplayvalorant.com%2Fopt_in%2F%3Fredirect%3D%2Fdownload%2F&response_type=token%20id_token&scope=account%20openid&state=c2lnbnVw&ui_locales=en"
            )
          }
        >
          Play Free
        </Button>
      </div>
      <div className="agents_container">
        <div className="agents_box">
          <h1>YOUR AGENTS</h1>
          <h4>CREATIVITY IS YOUR GREATEST WEAPON.</h4>
          <p>
            More than guns and bullets, you’ll choose an Agent armed with
            adaptive, swift, and lethal abilities that create opportunities to
            let your gunplay shine. No two Agents play alike, just as no two
            highlight reels will look the same.
          </p>
          <Link to="/agents">
            <Button className="agents_btn" danger>
              View All Agents
            </Button>
          </Link>
        </div>
      </div>
      <div className="maps_container">
        <div className="maps_box">
          <div className="agents_box">
            <h1>YOUR MAPS</h1>
            <h4>FIGHT AROUND THE WORLD</h4>
            <p>
              Each map is a playground to showcase your creative thinking.
              Purpose-built for team strategies, spectacular plays, and clutch
              moments. Make the play others will imitate for years to come.
            </p>
            <Link to="/maps">
              <Button className="maps_btn" danger>
                View All Maps
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
