import React, { useState, useMemo } from "react";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/header";
import Projects from "./components/projects/projects";
import Contact from "./components/contact";
import Certifications from "./components/certifications";
import Conferences from "./components/conferences";
import Footer from "./components/footer";
import Home from "./components/home";
import Skills from "./components/skills";
import SectionWrapper from "./components/section-wrapper";

import "./App.css";

const App = () => {
  // Lift dark mode state to the top-level App
  const [darkMode, setDarkMode] = useState(false);

  // Create a memoized theme that updates when darkMode changes
  const theme = useMemo(
    () =>
      createTheme({
        typography: { fontFamily: "Poppins, sans-serif" },
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: darkMode ? "#fff" : "#000" },
          text: {
            primary: darkMode ? "#fff" : "#000",
            secondary: darkMode ? "#aaa" : "#666",
          },
          background: { default: darkMode ? "#121212" : "#fff" },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <SectionWrapper id="home" darkMode={darkMode}>
          <Home />
        </SectionWrapper>

        <SectionWrapper darkMode={darkMode} id="projects">
          <Projects />
        </SectionWrapper>
        <SectionWrapper darkMode={darkMode} id="skills">
          <Skills />
        </SectionWrapper>

        <SectionWrapper darkMode={darkMode} id="certifications">
          <Certifications />
        </SectionWrapper>

        <SectionWrapper darkMode={darkMode} id="conferences">
          <Conferences />
        </SectionWrapper>

        <Footer darkMode={darkMode} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
