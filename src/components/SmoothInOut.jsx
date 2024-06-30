/** @format */

import { AnimatePresence, motion } from "framer-motion";
import { presenceVariants } from "../animations/presenceVariants";
export default function SmoothInOut({ children, className }) {
  return (
    <AnimatePresence>
      <motion.section
        variants={presenceVariants}
        initial="initial"
        animate="in"
        exit="out"
        className={className}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  );
}
