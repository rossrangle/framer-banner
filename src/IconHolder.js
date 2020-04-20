import React from "react";
import motion from "framer-motion";

import "./App.css";

/* Framer motion: animate SVGs */
function IconHolder({ icon, textImage }) {
  return (
    <>
      <img src={icon.src} alt={icon.alt} />
      <img src={textImage.src} alt={textImage.alt} />
    </>
  );
}

export default IconHolder;
