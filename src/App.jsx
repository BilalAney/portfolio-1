/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy } from "react";
// import LoadingSpinner from "./components/LoadingSpinner";

const AppLayout = lazy(() => import("./pages/AppLayout"));
const Home = lazy(() => import("./components/Home"));
const AboutMe = lazy(() => import("./components/AboutMe"));
const Education = lazy(() => import("./components/Education"));
const HireMe = lazy(() => import("./components/HireMe"));
const Projects = lazy(() => import("./components/Projects"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="aboutme" element={<AboutMe />} />
            <Route path="education" element={<Education />} />
            <Route path="projects" element={<Projects />} />
            <Route path="hireme" element={<HireMe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
