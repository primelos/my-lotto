import React from "react";
import { Link } from "react-router-dom";
import "./nav.styles.scss";

const Nav = () => {
  return (
    <div className="nav-box">
      <Link className="nav-button" to="/lotto">
        <div>
          Ca
          <br /> Lottery
        </div>
      </Link>
      <Link className="nav-button" to="/mega">
        <div>
          Mega
          <br /> Millions
        </div>
      </Link>
      <Link className="nav-button" to="/power">
        <div>
          Power
          <br /> Ball
        </div>
      </Link>
    </div>
  );
};

export default Nav;
