import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import India from "./pages/India";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/india" element={<India />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
