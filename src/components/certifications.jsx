// Certifications.js
import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";

const certificationsData = [
  {
    title: "IBM Back-End Developer",
    date: "Ongoing – Anticipated: 04/2025",
    focus:
      "Web Development, Data Modeling, Cloud Computing, Scalability Design, DevOps, Python",
  },
  {
    title: "AWS Cloud Support Associate Professional Certificate",
    date: "Ongoing – Anticipated: 05/2025",
    focus:
      "Customer Feedback Analysis, Advanced Troubleshooting, Optimized Communication, Incident Tracking & Analysis",
  },
  {
    title: "Going Places with Spatial Analysis (ESRI)",
    date: "02/2024",
    focus:
      "Data Exploration, Pattern Detection, Comparative Analysis, Predictive Modeling",
  },
  {
    title: "Application Development using Microservices and Serverless (IBM)",
    date: "11/2023",
    focus: "Microservices, REST API, Postman, Swagger, Docker, IBM Code Engine",
  },
  {
    title: "Developing AI Applications with Python and Flask (IBM)",
    date: "09/2023",
    focus:
      "Python Module Development, Unit Testing, Flask Deployment, AI Application Development",
  },
];

const Certifications = ({ darkMode }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{ minHeight: "calc(100vh - 64px - 60px)", py: 4 }}
    >
      <Typography variant="h4" gutterBottom>
        Certifications
      </Typography>
      <Grid container spacing={4}>
        {certificationsData.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                border: `1px solid ${darkMode ? "#fff" : "#000"}`,
                maxHeight: 250,
                minHeight: 250,
                position: "relative",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {cert.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
                  {cert.date}
                </Typography>
                <Typography variant="body2">{cert.focus}</Typography>
              </CardContent>
              <Box
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  textAlign: "center",
                  py: 1,
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                }}
              >
                <a
                  href="https://www.linkedin.com/in/dilanramirez/details/certifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Learn More
                </a>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Certifications;
