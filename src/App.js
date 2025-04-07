import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollToTop from "./components/atoms/ScrollToTop";
import Home from "./pages/Home";
import ModuleDetail from "./pages/ModuleDetail";
import Poetry from "./pages/Poetry";
import Portal from "./pages/Portal";
import ProjectDetail from "./pages/ProjectDetail";
import Swapper from "./pages/Swapper";
import SeoTools from "./pages/SeoTools";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/modules/:moduleId" element={<ModuleDetail />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/swapper" element={<Swapper />} />
          <Route path="/poetry" element={<Poetry />} />
          <Route path="/seo" element={<SeoTools />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}
