/** @format */

import { motion } from "framer-motion";
import { coloring } from "../animations/coloring";
export default function Title({ children, className }) {
  return (
    <motion.p
      animate={coloring}
      transition={{ duration: 8, repeat: Infinity, type: "linear" }}
      className={`title ${className}`}
    >
      {children}
    </motion.p>
  );
}
