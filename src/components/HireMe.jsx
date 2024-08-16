/** @format */
import styles from "../styles/HireMe.module.css";
import SmoothInOut from "./SmoothInOut";
import Title from "./Title";
import { motion } from "framer-motion";
import whatsapp from "../assets/WhatsApp.svg";
import LinkedIn from "../assets/Linedin.svg";
import X from "../assets/X.svg";

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
      <h1 className={styles.subTitle}> I AM PLEASED TO WORK WITH YOU </h1>
      <div className={styles.bottomSection}>
        <h4 className={styles.describtion}>
          Need a skilled software engineer? I specialize in full-stack
          development, front-end tech, and scalable apps. Let&apos;s create
          innovative solutions together. Contact me today!
          <br />
          CONTACT ME. I AM AVAILABLE ON ALL PLATFORMS
        </h4>
        <div className={styles.contactMeContainer}>
          <div className={styles.btnCtn}>
            FIND ME !
            <div className={styles.socialMedia}>
              <span
                className={styles.socialMediaItem}
                onClick={() =>
                  (window.location.href = "https://wa.me/07738645535")
                }
              >
                <img src={whatsapp} />
                +964 773 864 5535
              </span>
              <span
                className={styles.socialMediaItem}
                onClick={() =>
                  (window.location.href =
                    "https://www.linkedin.com/in/bilal-el-aney-166926323?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6QkGTusYT0Ki31MekWhbPQ%3D%3D")
                }
              >
                <img src={LinkedIn} />
                Bilal El-Aney
              </span>
              <span
                className={styles.socialMediaItem}
                onClick={() =>
                  (window.location.href = "https://x.com/al_aney64258")
                }
              >
                <img src={X} />
                Bilal El-Aney
              </span>
            </div>
          </div>
          <div className={styles.btnCtn}>
            CONTACT ME &rarr;
            <button>📞 +964 773 864 5535</button> <p>-OR-</p>
            <button
              className={styles.socialMediaItem}
              title=" bilal.al.aney@gmail.com "
              onClick={() => {
                window.location.href = `mailto:${EMAIL}?subject=${SUBJECT}&body=${BODY}`;
              }}
            >
              📧 Email me
            </button>
          </div>
        </div>
      </div>
    </SmoothInOut>
  );
}
