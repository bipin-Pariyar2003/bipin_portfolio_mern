import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="glitch-overlay" aria-hidden="true" />
      <div className="scan-line" aria-hidden="true" />
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;