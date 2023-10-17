import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import India from "./pages/India";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/india" element={<India />} />
      </Routes>
    </BrowserRouter>
  );
}
