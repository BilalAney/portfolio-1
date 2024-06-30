/** @format */
import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function NavBarItem({
  isActive,
  icon,
  label,
  nextPath,
  tooltip,
}) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleMouseIn() {
    setIsMouseOver(true);
  }

  function handleMouseOut() {
    setIsMouseOver(false);
  }
  return (
    <NavLink
      to={nextPath}
      className={styles.a}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
    >
      <motion.div
        layout
        animate={{ opacity: { ease: "linear" }, layout: { duration: 0.3 } }}
        className={`${styles.navItem} ${isActive && styles.selected} ${
          isMouseOver && styles.hovered
        }`}
      >
        {isMouseOver && <span className={styles.tooltip}>{tooltip}</span>}
        <div className={styles.labelCtn}>
          <img
            src={icon}
            className={`${styles.icon} ${!isActive && styles.iconFullWidth}`}
          />
          {false && <p className={styles.label}>{label}</p>}
        </div>
        {(isActive || isMouseOver) && <span className={styles.piece}></span>}
      </motion.div>
    </NavLink>
  );
}
