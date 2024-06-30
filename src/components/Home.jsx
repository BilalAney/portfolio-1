/** @format */

import styles from "../styles/Home.module.css";
import image from "../assets/image-min.jpg";
import { motion } from "framer-motion";
import Title from "./Title";
import SmoothInOut from "./SmoothInOut";

const professionalDescribtion = `Dynamic and highly skilled Full-Stack Developer with a strong emphasis
        on front-end development, boasting a proven track record of creating
        responsive, visually appealing, and user-friendly web applications.
        Adept at leveraging modern frameworks and technologies to deliver
        seamless user experiences. Complemented by a strong background in social
        media management and proficiency with various office applications, I
        bring a unique blend of technical expertise and practical business
        acumen. Passionate about staying current with industry trends and
        committed to delivering high-quality results in collaborative and
        fast-paced environments.`;

export default function Home() {
  return (
    <SmoothInOut className={styles.home}>
      <div className={styles.textualPart}>
        <Title>WHO AM I?</Title>

        <p className={styles.describtion}>{professionalDescribtion}</p>
      </div>
      <motion.div whileHover={{ scale: 1.5 }} className={styles.visualPart}>
        <img src={image} className={styles.image} />
      </motion.div>
    </SmoothInOut>
  );
}
