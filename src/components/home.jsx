// Home.js
import React from "react";
import {
  Container,
  Typography,
  Box,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion } from "framer-motion";
import vector from "../assets/undraw_source-code.svg";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    mode: "light",
    primary: { main: "#000" },
    text: { primary: "#000", secondary: "#666" }, // secondary text is lighter/darker gray
    background: { default: "#fff" },
  },
});

// Smooth scroll function to navigate to the next section
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Home = ({ darkMode }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="md"
        id="home"
        sx={{
          minHeight: "calc(100vh - 64px - 60px)", // Adjust for header/footer height
          display: "flex",
          scrollMarginTop: "0px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: 4,
          px: 2,
        }}
      >
        <img
          src={vector}
          alt="Hero Illustration"
          style={{
            width: "100%",
            position: "absolute",
            filter: "blur(10px)",
            opacity: 0.2,
          }}
        />

        {/* Name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
        >
          <Typography
            variant={isMobile ? "h3" : "h2"}
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            Dilan Ramirez
          </Typography>
          <Typography
            variant={isMobile ? "h5" : "h4"}
            align="center"
            fontWeight="bold"
            color="#cecece"
            gutterBottom
            marginTop={-2}
            marginBottom={4}
          >
            Software Engineer
          </Typography>
        </motion.div>
        {/* Education Info */}

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        >
          <Typography
            variant={isMobile ? "body2" : "subtitle1"}
            align="justify"
            gutterBottom
            marginBottom={3}
          >
            I am a results-driven full-stack engineer passionate about building
            scalable web and geospatial applications. With over 6 years of
            experience, I specialize in building innovative, scalable solutions
            using modern technologies like React, Node.js, and cloud-based
            deployments. My work spans across full-stack development, geospatial
            analysis, and agile collaboration.
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          style={{ marginTop: isMobile ? 0 : -10, marginBottom: 20 }}
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        >
          <Typography
            variant={isMobile ? "body2" : "subtitle1"}
            align="center"
            color="#cecece"
            fontSize={14}
            gutterBottom
          >
            Bachelor of Science in Computer Science - University of Texas at El
            Paso
          </Typography>
          <Typography
            variant={isMobile ? "body2" : "subtitle1"}
            align="center"
            color="#cecece"
            fontSize={14}
            sx={{ marginTop: -1 }}
            gutterBottom
          >
            Cum Laude Honors (3.6 GPA) - Graduated May 2021
          </Typography>
        </motion.div>
        {/* Down Arrow Icon Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        >
          <Box sx={{ mt: 4 }}>
            <IconButton onClick={() => scrollToSection("projects")}>
              <KeyboardArrowDownIcon
                fontSize="large"
                sx={{ color: darkMode ? "#fff" : "#000" }}
              />
            </IconButton>
          </Box>
        </motion.div>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
