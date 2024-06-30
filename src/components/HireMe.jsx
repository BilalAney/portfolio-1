/** @format */
import styles from "../styles/HireMe.module.css";
import SmoothInOut from "./SmoothInOut";
import Title from "./Title";
import { motion } from "framer-motion";

const EMAIL = encodeURIComponent("bilal.al.aney@gmail.com");
const SUBJECT = encodeURIComponent(
  "Write Here The Describtion Of Your Request. So That I Can Know What You Want fast"
);
const BODY = encodeURIComponent(
  "Write your request in details. Or what do you want."
);
export default function HireMe() {
  return (
    <SmoothInOut className={styles.hireme}>
      <h1 className={styles.aboveTitle}>HIRE ME</h1>
      <Title>BILAL EL-ANEY</Title>
      <h1 className={styles.subTitle}> I AM PLEASED TO WORK WITH YOU 💻</h1>
      <div className={styles.bottomSection}>
        <h4 className={styles.describtion}>
          Looking for a dedicated and skilled software engineer to bring your
          project to life? With a strong background in full-stack development
          and a passion for building robust, scalable applications, I&apos;m
          here to help. My expertise spans front-end technologies, social media
          management, and office applications, ensuring a comprehensive approach
          to your software needs. Let&apos;s collaborate to create innovative
          solutions that drive your business forward. Contact me today, and
          let&apos;s turn your ideas into reality! <br />
          CONTACT ME. I AM AVAILABLE ON ALL PLATFORMS
        </h4>
        <div className={styles.btnCtn}>
          CONTACT ME &rarr;
          <button>📞 +964 773 864 5535</button> <p>-OR-</p>
          <motion.button
            title=" bilal.al.aney@gmail.com "
            whileHover={{ scale: 1.2, cursor: "pointer" }}
            whileTap={{ scale: 0.9, opacity: 0.8 }}
            transition={{ type: "spring", damping: 2, stiffness: 100 }}
            onClick={() => {
              window.location.href = `mailto:${EMAIL}?subject=${SUBJECT}&body=${BODY}`;
            }}
          >
            📧 Email me
          </motion.button>
        </div>
      </div>
    </SmoothInOut>
  );
}
