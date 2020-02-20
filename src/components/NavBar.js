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
      <NavButton text="BOOK NOW" />
      <NavButton text="JOIN" />
    </div>
  );
};

export default NavBar;
