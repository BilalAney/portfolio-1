/** @format */

import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

import Header from "../components/Header";
import { Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

export default function AppLayout() {
  return (
    <div>
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Outlet />
      </Suspense>

      <NavBar />
    </div>
  );
}
