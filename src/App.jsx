import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Loading from "./pages/Loading";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import India from "./pages/India";
import About from "./pages/About";
import Forms from "./pages/Forms";
import Kerala from "./pages/Kerala";
import Banglore from "./pages/Banglore";
import Tamilnadu from "./pages/Tamilnadu";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay, replace with actual loading logic
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <BrowserRouter>
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/india" element={<India />} />
          <Route path="/about" element={<About />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/kerala" element={<Kerala />} />
          <Route path="/banglore" element={<Banglore />} />
          <Route path="/tamilnadu" element={<Tamilnadu />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}
