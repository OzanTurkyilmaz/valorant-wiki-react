import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <div className="nav_container">
      <div className="homepage_logo">
        <Link to="/">
          <img src={logo} className="navbar_logo" alt="valorant logo"></img>
        </Link>

        <Link className="homepage_name" to="/">
          Valorant-Wiki
        </Link>
      </div>
      <div className="nav_links">
        <Link to="/agents">Agents</Link>
        <Link to="/maps">Maps</Link>
        <Link to="/weapons">Weapons</Link>
      </div>
    </div>
  );
}
