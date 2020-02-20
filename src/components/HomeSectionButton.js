import React from "react";
import "./homesectionbutton.css";

const HomeSectionButton = ({ text, backgroundColor, textColor }) => {
  const styling = {
    backgroundColor: backgroundColor,
    color: textColor
  };
  return (
    <button className="homesectionbutton" style={styling}>
      {text}
    </button>
  );
};

export default HomeSectionButton;
