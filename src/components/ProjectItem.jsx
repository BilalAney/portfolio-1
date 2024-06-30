/** @format */
import styles from "../styles/ProjectItem.module.css";
import { motion, useAnimation } from "framer-motion";

const hoverAnimation = {
  background: [
    "linear-gradient(to right, #000 0%, #fff 100%)",
    "linear-gradient(to right, #000 20%, #fff 80%)",
    "linear-gradient(to right, #000 30%, #fff 70%)",
    "linear-gradient(to right, #000 40%, #fff 60%)",
    "linear-gradient(to right, #000 50%, #fff 50%)",
    "linear-gradient(to right, #000 60%, #fff 40%)",
    "linear-gradient(to right, #000 70%, #fff 30%)",
    "linear-gradient(to right, #000 80%, #fff 20%)",
    "linear-gradient(to right, #000 90%, #fff 10%)",
    "linear-gradient(to right, #000 100%, #fff 0%)",
    "linear-gradient(to right, #000 90%, #fff 10%)",
    "linear-gradient(to right, #000 80%, #fff 20%)",
    "linear-gradient(to right, #000 70%, #fff 30%)",
    "linear-gradient(to right, #000 60%, #fff 40%)",
    "linear-gradient(to right, #000 50%, #fff 50%)",
    "linear-gradient(to right, #000 40%, #fff 60%)",
    "linear-gradient(to right, #000 30%, #fff 70%)",
    "linear-gradient(to right, #000 20%, #fff 80%)",
    "linear-gradient(to right, #000 10%, #fff 90%)",
    "linear-gradient(to right, #000 0%, #fff 100%)",
  ],
  letterSpacing: [
    "2px",
    "4px",
    "6px",
    "8px",
    "6px",
    "4px",
    "2px",
    "2px",
    "2px",
    "2px",
    "2px",
  ],

  color: [
    "#000",
    "#000",
    "#000",
    "#000",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#000",
  ],
  transition: { duration: 7.5, ease: "linear", repeat: Infinity },
};

export default function ProjectItem({ title, describtion, isToturial, link }) {
  const controls = useAnimation();

  const resetHoverAnimation = () => {
    controls.stop();
    controls.set({
      background: "linear-gradient(to right, #000 0%, #fff 100%)",
      letterSpacing: "2px",
      color: "#000",
    });
  };

  const startHoverAnimation = () => {
    controls.start(hoverAnimation);
  };

  return (
    <div className={styles.project}>
      {isToturial && <span className={styles.toturial}>TOTURIAL</span>}
      <div className={styles.textualPart}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.describtion}>{describtion}</p>
      </div>
      <motion.button
        onHoverStart={startHoverAnimation}
        onHoverEnd={resetHoverAnimation}
        animate={controls}
        className={styles.btn}
        onClick={() => {
          if (link) window.location.href = link;
        }}
      >
        FIND MORE! &rarr;
      </motion.button>
    </div>
  );
}
