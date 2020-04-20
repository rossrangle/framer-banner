import React from "react";
import motion from "framer-motion";

import "./App.css";

/* Framer motion: animate images */
function ImageHolder({ img, className }) {
  return (
    <img
      src={img.src}
      alt={img.alt}
      className={className ? className : undefined}
    />
  );
}

export default ImageHolder;
