import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";

// Componentes
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageTransition from "./components/PageTransition/PageTransition";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// Páginas
import Home from "./pages/Home/Home";
import Restaurant from "./pages/Restaurant/Restaurant";
import Club from "./pages/Club/Club";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

// Componente contenedor para AnimatePresence
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition key="home">
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/restaurant"
          element={
            <PageTransition key="restaurant">
              <Restaurant />
            </PageTransition>
          }
        />
        <Route
          path="/club"
          element={
            <PageTransition key="club">
              <Club />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition key="about">
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition key="contact">
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
