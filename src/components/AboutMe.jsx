/** @format */

import styles from "../styles/AboutMe.module.css";
import image from "../assets/image_1-min.jpg";
import { motion } from "framer-motion";

import Title from "./Title";
import SmoothInOut from "./SmoothInOut";
import { downloadCV } from "../download";

export default function AboutMe() {
  return (
    <SmoothInOut className={styles.aboutme}>
      <motion.div whileHover={{ scale: 1.5 }} className={styles.visualPart}>
        <img src={image} className={styles.image} />
      </motion.div>
      <div className={styles.textualPart}>
        <Title>More about this man</Title>
        <p className={styles.describtion}>
          High skilled technical man, loves everything new in the tech and cars
          field, he has the inspiration to stay up-to-date.{" "}
          <span className={styles.intern}>
            Now he is working in Fastlink HQ as an Inter
          </span>{" "}
          <br />
          🧑🏻 Full name: Bilal Jamal Muhammed <br />
          📅 Date of birth: 1 / 1 / 2003 <br />
          📍 Birth place: Iraq - Baghdad <br />
          ➡️ He got 97.333 % in the KRG national examinations of preparatory
          schools ☺️
        </p>
        <button className={styles.btn} onClick={downloadCV}>
          ⬇️ Download My CV
        </button>
      </div>
    </SmoothInOut>
  );
}
