import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import OurTeam from "./pages/OurTeam";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import React from "react";

export default function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/ourteam" element={<OurTeam />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
