import React from "react";
import "./home_community.css";
import HomeSectionButton from "./HomeSectionButton";
import insta1 from "../assets/graphics/insta1.jpg";
import insta2 from "../assets/graphics/insta2.jpg";
import insta3 from "../assets/graphics/insta3.jpg";

const HomeCommunity = () => {
  return (
    <div id="homecommunity">
      <div id="communitycontainer">
        <div>
          <h2 id="communitytitle">THE H1VE COMMUNITY</h2>
          <p id="classestext">
            Community lies at the heart of training here at H1VE. No matter how
            sweaty, broken, defeated or ecstatic you feel after your session,
            don’t forget to snap a photo or a selfie and tag it with
            #TRAINATH1VE so others can feel motivated by your efforts. We’re in
            this together.
          </p>
        </div>
      </div>
      <div id="communitycontainer">
        <div id="commpiccontainer">
          <div className="instapic">
            <img src={insta1} alt="insta1" width="240" height="240" />
          </div>
          <div className="instapic">
            <img src={insta2} alt="insta2" width="240" height="240" />
          </div>
          <div className="instapic">
            <img src={insta3} alt="insta3" width="240" height="240" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCommunity;
