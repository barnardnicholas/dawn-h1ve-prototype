import React from "react";
import "./home_findoutmore.css";
import HomeSectionButton from "./HomeSectionButton";
import bondpattern1 from "../assets/graphics/bondpattern1.png";

const HomeFindOutMore = () => {
  return (
    <div id="homefindoutmore">
      <div id="fomcontainer">
        <div>
          <h2 id="allfor1">
            ALL FOR 1,
            <br />1 FOR ALL
          </h2>
          <p id="splashtext">
            At H1VE, we work as one so everyone can achieve their personal
            goals, from the complete beginner to the seasoned exerciser. We
            instil spirit, passion, drive and togetherness to ensure our
            community truly feel a part of H1VE.
          </p>
          <HomeSectionButton
            text="FIND OUT MORE"
            backgroundColor="#F24423"
            textColor="#ffffff"
          />
        </div>
        <div id="meetheadcoach">
          <iframe
            title="H1VE - Meet our Head Coach, Andy Turner"
            src="https://www.youtube.com/embed/p78iYkfRuO0?feature=oembed"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
            name="fitvid0"
            width="440"
            height="247"
          ></iframe>
        </div>
        <br />
        <img
          src={bondpattern1}
          alt="graphic"
          id="bondpattern1"
          width="85"
          height="220"
        />
      </div>
    </div>
  );
};

export default HomeFindOutMore;
