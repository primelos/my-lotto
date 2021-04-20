import React from "react";
import { Link } from "react-router-dom";
import "./nav.styles.scss";

const Nav = () => {
  return (
    <div className="nav-box">
      <Link to="/"></Link>
      <div className="nav-button">
        <Link to="/lotto">
          Ca
          <br /> Lottery
        </Link>
      </div>
      <div className="nav-button">
        <Link to="/mega">
          Mega
          <br /> Millions
        </Link>
      </div>
      <div className="nav-button">
        <Link to="/power">
          Power
          <br /> Ball
        </Link>
      </div>
    </div>
  );
};

export default Nav;
