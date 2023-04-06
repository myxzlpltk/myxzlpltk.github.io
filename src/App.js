import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Portal from "./pages/Portal";
import Swagger from "./pages/Swagger";
import Swapper from "./pages/Swapper";

export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/swapper" element={<Swapper />} />
          <Route path="/api" element={<Swagger />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
