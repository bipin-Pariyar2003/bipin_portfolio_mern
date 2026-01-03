import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // 🔥 KEY FIX
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1.1, // normal speed
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;
