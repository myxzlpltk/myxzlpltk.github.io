import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Portal from "./pages/Portal";
import Swapper from "./pages/Swapper";
import ModuleDetail from "./pages/ModuleDetail";

export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/modules/:moduleId" element={<ModuleDetail />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/swapper" element={<Swapper />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
