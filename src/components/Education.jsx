/** @format */
import styles from "../styles/Education.module.css";
import image from "../assets/graduation.svg";
import Title from "./Title";
import SmoothInOut from "./SmoothInOut";
export default function Education() {
  return (
    <SmoothInOut className={styles.education}>
      <div className={styles.visualPart}>
        <img src={image} className={styles.image} />
      </div>
      <div className={styles.textualPart}>
        <Title className={styles.eduTitle}>Software Engineer</Title>

        <Item place="Salahaddin University | Erbil">
          <strong>Currently</strong> Student at 4th stage in Salahaddin
          Unversity in Erbil.
        </Item>
        <Item place="Udemy Online Academy">
          Taking and finished the most professional and the top rated courses
          and bootcamps starting from React Ultimate Course, CSS and Sass to
          Back-end ultimate bootcamp. All of those led me to be an excellent web
          developer with high skills in variety of technologies like,{" "}
          <strong>
            React and its libraries (React Router, Redux, ...), Tailwind, npm
            and node.js, etc...
          </strong>
        </Item>
        <Item place="Other courses on YouTube">
          I took <strong>many different </strong> courses provided by highly
          skilled developers, like Elzero JavaScript bootcamp.
        </Item>
      </div>
    </SmoothInOut>
  );
}

function Item({ place, children }) {
  return (
    <div className={styles.item}>
      <h1 className={styles.place}>{place}</h1>
      <p className={styles.describtion}>{children}</p>
    </div>
  );
}
