/** @format */

import useProjects from "../hooks/useProjects";
import LoadingSpinner from "./LoadingSpinner";
import ProjectItem from "./ProjectItem";
import styles from "../styles/Projects.module.css";
import Title from "./Title";
import SmoothInOut from "./SmoothInOut";

export default function Projects() {
  const [data, state] = useProjects();

  const projects = data.map((ele) => (
    <ProjectItem
      key={ele.id}
      title={ele.title}
      describtion={ele.describtion}
      isToturial={ele.isToturial}
      link={ele.link}
    />
  ));

  const element =
    state === "loading" ? (
      <LoadingSpinner />
    ) : state.includes("Error") ? (
      <h1>{state.split(" | ").at(1)}</h1>
    ) : (
      <div className={styles.projectsList}>{projects}</div>
    );

  return (
    <SmoothInOut className={styles.projects}>
      <Title>My Projects</Title>
      {element}
    </SmoothInOut>
  );
}
