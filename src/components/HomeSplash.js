import React from "react";
import "./home_splash.css";
import HomeSectionButton from "./HomeSectionButton";
import whitelogo from "../assets/graphics/1080x270-03.png";
import protein from "../assets/graphics/protein.png";
import bondpattern2 from "../assets/graphics/bondpattern2.png";

const HomeSplash = () => {
  return (
    <div id="homesplash">
      <div id="splashcontainer">
        <img src={whitelogo} alt="H1VE" id="logo" />
        <h2>A boutique fitness studio like no other.</h2>
        <p id="splashtext">
          Combining cardio, functional, strength and conditioning training with
          fantastic equipment, MYZONE technology, state of the art lighting, led
          by Rockstar coaches, all of which add to the breathtaking experience
          that is H1VE.
        </p>
        <HomeSectionButton
          text="JOIN NOW"
          backgroundColor="#0F0A59"
          textColor="#ffffff"
        />
        <br />
        <img
          src={bondpattern2}
          alt="graphic"
          id="bondpattern2"
          width="46"
          height="150"
        />
      </div>
      <div id="proteincontainer">
        <img src={protein} alt="graphic" id="proteingraphic" />
      </div>
    </div>
  );
};

export default HomeSplash;
