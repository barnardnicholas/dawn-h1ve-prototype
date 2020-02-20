import React from "react";
import "./navbutton.css";

const NavButton = ({ text, id }) => {
  return (
    <button class="navbutton" id={id}>
      {text}
    </button>
  );
};

export default NavButton;
