import React from "react";

import "./App.css";

function IconHolder({ icon, text }) {
  return (
    <div className="icon-holder">
      <img src={icon.src} alt={icon.alt} className="icon-holder__icon" />
      <span className="icon-holder__text">{text}</span>
    </div>
  );
}

export default IconHolder;
