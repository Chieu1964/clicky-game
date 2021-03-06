import React from "react";
import "./style.css";

const Header = props => (
  <nav>
    <ul>
      <li className="brand animated lightSpeedIn">
        <a href="/">{props.title}</a>
      </li>

      <li id="rw">{props.comment}</li>

      <li>Current Score: {props.score}</li>

      <li>Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Header;


