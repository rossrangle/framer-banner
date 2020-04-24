import React from "react";

function IconHolder({ icon, text }) {
  return (
    <div className="icon-holder">
      <div className="icon-holder__icon">
        <img src={icon.src} alt={icon.alt} />
      </div>
      <h1 className="icon-holder__text">{text}</h1>
    </div>
  );
}

export default IconHolder;
