import React from "react";
import "./navbar.css";
import NavButton from "./NavButton";

const NavBar = () => {
  return (
    <div id="navbar">
      <NavButton text="CONNECT" />
      <NavButton text="COMMUNITY" />
      <NavButton text="CLASSES" />
      <NavButton text="ABOUT" />
      <NavButton text="BOOK NOW" id="whitetext" />
      <NavButton text="JOIN" id="whitetext" />
    </div>
  );
};

export default NavBar;
