import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import OurTeam from "./pages/OurTeam";
import OurMission from "./pages/OurMission";
import CourseDescription from "./pages/CourseDescription";
import FAQ from "./pages/FAQ";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import React from "react";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ourteam" element={<OurTeam />} />
          <Route exact path="/ourmission" element={<OurMission />} />
          <Route exact path="/faq" element={<FAQ />} />
          <Route
            exact
            path="/coursedescription"
            element={<CourseDescription />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
