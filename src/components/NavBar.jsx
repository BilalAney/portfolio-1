/** @format */

import home from "../assets/home.svg";
import bag from "../assets/bag.svg";
import education from "../assets/education.svg";
import list from "../assets/list.svg";
import user from "../assets/user.svg";
import NavBarItem from "./NavBarItem";

import styles from "../styles/NavBar.module.css";
import { useLocation } from "react-router-dom";

const navigationItems = [
  {
    id: 0,
    label: "Home",
    icon: home,
    isSelected: true,
    to: "/",
    tooltip: "Home",
  },
  {
    id: 1,
    label: "Education",
    icon: education,
    isSelected: false,
    to: "/education",
    tooltip: "Education",
  },
  {
    id: 2,
    label: "Projects",
    icon: list,
    isSelected: false,
    to: "/projects",
    tooltip: "Projects",
  },
  {
    id: 3,
    label: "About Me",
    icon: user,
    isSelected: false,
    to: "/aboutme",
    tooltip: "Personal Info",
  },
  {
    id: 4,
    label: "Hire me",
    icon: bag,
    isSelected: false,
    to: "/hireme",
    tooltip: "Hire Me",
  },
];

export default function NavBar() {
  const url = useLocation();

  return (
    <div className={styles.navBar}>
      {navigationItems.map((ele) => (
        <NavBarItem
          key={ele.id}
          label={ele.label}
          icon={ele.icon}
          isActive={url.pathname === ele.to}
          nextPath={ele.to}
          tooltip={ele.tooltip}
        />
      ))}
    </div>
  );
}
