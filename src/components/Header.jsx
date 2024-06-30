/** @format */

import Logo from "./Logo";
import styles from "../styles/Header.module.css";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const url = useLocation(); //will trigger a re-render when the url gets changes
  const next =
    url.pathname === "/home" || url.pathname === "/"
      ? "education"
      : url.pathname === "/education"
      ? "projects"
      : url.pathname === "/projects"
      ? "aboutme"
      : url.pathname === "/aboutme"
      ? "hireme"
      : url.pathname === "/hireme"
      ? "/"
      : "";

  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <Logo />
      </div>
      <div className={styles.btnSection}>
        {url.pathname !== "/hireme" && (
          <Link to="hireme">
            <button className={styles.hiremeBtn} title=" DONT'T HESITATE !">
              ✅ HIRE ME
            </button>
          </Link>
        )}

        <Link to={next}>
          <button className={styles.nextBtn}>
            {url.pathname === "/hireme" ? "🏠 Home" : "NEXT ➡️"}
          </button>
        </Link>
      </div>
    </header>
  );
}
