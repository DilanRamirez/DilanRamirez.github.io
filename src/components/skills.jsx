// Skills.js
import React from "react";
import { Container, Typography, Box, Grid, Chip } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";

const theme = createTheme({
  typography: { fontFamily: "Poppins, sans-serif" },
  palette: {
    mode: "light",
    primary: { main: "#000" },
    text: { primary: "#000" },
    background: { default: "#fff" },
  },
});

const skillsData = {
  "Database Management": [
    "SQL Server Enterprise Geodatabases",
    "SDE",
    "MySQL",
    "PostgreSQL",
    "Oracle Database",
    "MongoDB",
  ],
  "Scripting & Automation": ["Python (ArcPy)", "npm", "Bash"],
  "Web Development": [
    "React JS",
    "Redux",
    "JavaScript",
    "Node.js",
    "Figma",
    "React Native",
    "TypeScript",
    "Gatsby",
    "Sentry",
    "HTML",
    "CSS",
  ],
  "Geospatial Analysis": [
    "ArcGIS Pro",
    "QGIS",
    "Google Earth Engine",
    "Esri JavaScript API",
    "ArcGIS Experience Builder",
  ],
  "Software Development": [
    "UI/UX Design",
    "Agile Methodology",
    "Git",
    "GitHub",
    "CI/CD Pipelines",
  ],
  "Cloud & DevOps": [
    "Microservices",
    "REST API",
    "Postman",
    "Docker",
    "Flask",
    "AWS (EC2, Linux, IAM)",
  ],
  "Behavioral Skills": [
    "Self-motivation",
    "Time Management",
    "Problem-solving",
    "Adaptability",
    "Critical Thinking",
    "Teamwork",
    "Leadership",
    "Work Ethic",
    "Interpersonal Communication",
    "Negotiation",
    "Attention to Detail",
    "Organization",
    "Initiative",
    "Reliability",
    "Accountability",
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Skills() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="lg"
        id="skills"
        sx={{
          minHeight: "calc(100vh - 64px - 60px)", // adjusts for header/footer
          scrollMarginTop: "70px",
          py: 4,
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Typography variant="h4" gutterBottom>
            Skills
          </Typography>
          {Object.entries(skillsData).map(([category, skills], index) => (
            <motion.div key={index} variants={itemVariants}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {category}
                </Typography>
                <Grid container spacing={1}>
                  {skills.map((skill, idx) => (
                    <Grid item key={idx}>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <Chip
                          label={skill}
                          variant="outlined"
                          sx={{
                            borderColor: "#000",
                            color: "#000",
                          }}
                        />
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </ThemeProvider>
  );
}

export default Skills;
