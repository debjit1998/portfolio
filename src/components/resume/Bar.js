import React from "react";
import { motion } from "framer-motion";

function Bar({ value: { icon, name, level }, index }) {
  const bar_width = `${level}%`;

  return (
    <motion.div
      className="bar"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
      }}
    >
      <motion.div
        className="bar__wrapper"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: bar_width, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 75,
          delay: index * 0.2 + 0.5,
        }}
      >
        <motion.span className="bar__name">
          <img src={icon} alt="skill icon" className="bar__icon mr-2" />
          {name}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

export default Bar;
