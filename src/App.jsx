import "./App.css";
import React, { useEffect } from "react";
import { IdiomaProvider } from "./contexts/idioma-context";
import Navbar from "./sections/Navbar/Navbar";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

function App() {

  return (
    <IdiomaProvider>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </IdiomaProvider>
  );
}

export default App;
