import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}
