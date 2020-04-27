import React from "react";
import { motion } from "framer-motion";

const TRANSITION_TIME_OPACITY_S = 1;
const TRANSITION_TIME_ROTATE_S = 2;

function ImageHolder({ img, className }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, rotate: [-6, 0, 6] }}
      transition={{
        duration: TRANSITION_TIME_OPACITY_S,
        rotate: { yoyo: Infinity, duration: TRANSITION_TIME_ROTATE_S },
      }}
      className={className ? className : undefined}
    >
      <img src={img.src} alt={img.alt} />
    </motion.div>
  );
}

export default ImageHolder;
