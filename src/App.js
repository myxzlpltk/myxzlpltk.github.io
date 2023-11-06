import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/atoms/ScrollToTop";
import Home from "./pages/Home";
import ModuleDetail from "./pages/ModuleDetail";
import Poetry from "./pages/Poetry";
import Portal from "./pages/Portal";
import ProjectDetail from "./pages/ProjectDetail";
import Swapper from "./pages/Swapper";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/modules/:moduleId" element={<ModuleDetail />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/swapper" element={<Swapper />} />
          <Route path="/poetry" element={<Poetry />} />
        </Routes>
      </ScrollToTop>
    </HashRouter>
  );
}
