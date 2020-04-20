import React from "react";
import motion from "framer-motion";

import "./App.css";

/* Framer motion: animate images */
function ImageHolder({ img }) {
  return <img src={img.src} alt={img.alt} />;
}

export default ImageHolder;
