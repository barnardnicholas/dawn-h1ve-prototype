import React from "react";
import "./home_splash.css";
import HomeSectionButton from "./HomeSectionButton";
import whitelogo from "../assets/graphics/1080x270-03.png";

const HomeSplash = () => {
  return (
    <div id="homesplash">
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
    </div>
  );
};

export default HomeSplash;
