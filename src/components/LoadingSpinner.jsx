/** @format */
import styles from "../styles/LoadingSpinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className={styles.ctn}>
      <div className={styles.circle_left}></div>
      <div className={styles.circle_middle}></div>
      <div className={styles.circle_right}></div>
    </div>
  );
}
