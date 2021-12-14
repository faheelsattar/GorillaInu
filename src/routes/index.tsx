import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Guide from "../pages/Guide";
import Home from "../pages/Home";

const WebRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Guide />} />
      </Routes>
    </Router>
  );
};

export default WebRoutes;
