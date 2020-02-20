import React from "react";
import "./footer.css";
import logo from "../assets/graphics/1080x270-03.png";
import facebook from "../assets/graphics/facebook.svg";
import instagram from "../assets/graphics/instagram-logo.svg";

const Footer = () => {
  return (
    <div id="footer">
      <div id="footerlogo">
        <img src={logo} alt="logo" width="120" height="26" />
      </div>
      <div>
        Stockport Sports Village
        <br />
        Lambeth Grove, Woodley
        <br />
        Stockport, SK6 1QX
      </div>
      <div>
        hello@h1ve.co.uk
        <br />
        0161 494 3140
        <br />
        Company #11070328
      </div>
      <div>
        Privacy Policy
        <br />
        Terms & Conditions
        <br />© H1VE
      </div>
      <div id="socialmedialogos">
        <img src={instagram} alt="instagram" width="32" height="32" />
        <img src={facebook} alt="facebook" width="32" height="32" />
      </div>
    </div>
  );
};

export default Footer;
