import React from "react";
import "./home_booknow.css";
import HomeSectionButton from "./HomeSectionButton";

const HomeBookNow = () => {
  return (
    <div id="homebooknow">
      <div id="booknowcontainer">
        <div>
          <h2>CLASSES</h2>
          <p id="classestext">
            The H1VE boutique fitness studio offers over 25 dynamic, energising
            and motivating classes every week, each designed to push you to your
            limits and give you a full body workout to remember! Classes are all
            led by our ‘Rockstar’ coaches whose sessions combine cardio,
            functional, strength and conditioning training. You will be part of
            an environment like no other, with classes changing regularly to
            ensure you continuously learn new training techniques and progress
            your fitness.
          </p>
          <h3>
            Book your free taster session today to experience H1VE for yourself.
          </h3>
          <HomeSectionButton
            text="BOOK NOW"
            backgroundColor="#F24423"
            textColor="#ffffff"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBookNow;
