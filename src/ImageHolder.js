import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./App.css";

const TRANSITION_TIME_OPACITY_S = 1;

function ImageHolder({ img, className }) {
  return (
    <AnimatePresence>
      <motion.div
        key={img.src}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: [-2, 0, 2] }}
        transition={{
          duration: TRANSITION_TIME_OPACITY_S,
          rotate: { yoyo: Infinity, duration: TRANSITION_TIME_OPACITY_S * 2 },
        }}
        className={className ? className : undefined}
      >
        <img src={img.src} alt={img.alt} />
      </motion.div>
    </AnimatePresence>
  );
}

export default ImageHolder;
