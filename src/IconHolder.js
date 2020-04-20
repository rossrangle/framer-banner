import React from "react";
import motion from "framer-motion";

import "./App.css";

/* Framer motion: animate SVGs */
function IconHolder({ icon, textImage }) {
  return (
    <div className="icon-holder">
      <img src={icon.src} alt={icon.alt} class="icon" />
      <img src={textImage.src} alt={textImage.alt} class="text-image" />
    </div>
  );
}

export default IconHolder;
