import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Componentes
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Páginas
import Home from "./pages/Home/Home";
import Restaurant from "./pages/Restaurant/Restaurant";
import Club from "./pages/Club/Club";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/Club" element={<Club />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
