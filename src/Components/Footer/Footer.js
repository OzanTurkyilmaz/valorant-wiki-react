import React from "react";
import "./Footer.css";

export default function footer() {
  return (
    <div className="footer">
      <div className="footer_container">
        <img
          className="footer_logo"
          src="https://www.svgrepo.com/show/111208/twitter.svg"
          alt="twitter logo"
        ></img>
        <img
          className="footer_logo"
          src="https://www.svgrepo.com/show/95009/youtube.svg"
          alt="youtube logo"
        ></img>
        <img
          className="footer_logo"
          src="https://www.svgrepo.com/show/111199/instagram.svg"
          alt="instagram logo"
        ></img>
        <img
          className="footer_logo"
          src="https://www.svgrepo.com/show/138943/facebook.svg"
          alt="facebook logo"
        ></img>
        <img
          className="footer_logo"
          src="https://www.svgrepo.com/show/331368/discord-v2.svg"
          alt="discord logo"
        ></img>
      </div>
    </div>
  );
}
