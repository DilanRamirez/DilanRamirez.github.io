import react, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  return (
    <div>
      <Header
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      />
      <section id="home">
        <Home
          setCurrentSection={setCurrentSection}
          currentSection={currentSection}
        />
      </section>
      <section id="about">
        <About
          setCurrentSection={setCurrentSection}
          currentSection={currentSection}
        />
      </section>
      <section id="skills">
        <Skills
          setCurrentSection={setCurrentSection}
          currentSection={currentSection}
        />
      </section>
      <section id="projects">
        <Projects
          setCurrentSection={setCurrentSection}
          currentSection={currentSection}
        />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
