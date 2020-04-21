import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./App.css";

function IconHolder({ icon, text }) {
  return (
    <div className="icon-holder">
      <AnimatePresence>
        <motion.div
          className="icon-holder__icon"
          key={text + "icon"}
          initial={{ y: "-100%", opacity: 0 }}
          exit={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img src={icon.src} alt={icon.alt} />
        </motion.div>
        <motion.span
          className="icon-holder__text"
          key={text}
          initial={{ y: "100%", opacity: 0 }}
          exit={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default IconHolder;
