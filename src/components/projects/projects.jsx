// Projects.js
import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import ProjectModal from "./custom-modal";

import pal3 from "../../assets/pal3.png";
import aircoee from "../../assets/AIRCOEE.png";
import mentorpal from "../../assets/mentorpal.png";
import armap from "../../assets/armap.png";
import aov from "../../assets/aov.png";
import cruiceViewer from "../../assets/cruiceViewer.png";
import astral from "../../assets/astral.png";

const theme = createTheme({
  typography: { fontFamily: "Poppins, sans-serif" },
  palette: {
    mode: "light",
    primary: { main: "#000" },
    text: { primary: "#000" },
    background: { default: "#fff" },
  },
});

const ProjectCard = ({
  title,
  description,
  imageUrl,
  projectUrl,
  completeDescription,
  techStack,
}) => (
  <Card
    sx={{
      position: "relative",
      maxWidth: 345,
      minHeight: 400,
      maxHeight: 400,
      m: "auto",
      mb: 4,
      border: "1px solid #000",
    }}
  >
    {imageUrl && (
      <CardMedia
        component="img"
        height="180"
        image={imageUrl}
        alt={`${title} screenshot`}
      />
    )}
    <CardContent>
      <Typography gutterBottom variant="h5">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <Box
      sx={{
        textAlign: "center",
        pb: 2,
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <ProjectModal
        title={title}
        completeDescription={completeDescription}
        imageUrl={imageUrl}
        projectUrl={projectUrl}
        techStack={techStack}
      />
    </Box>
  </Card>
);

const Projects = () => {
  const projectData = [
    {
      title: "AI Assisted Revisions for Curricula",
      description:
        "Scalable web app for semi-automated revisions of Army doctrine and policy.",
      completeDescription:
        "AIRCOEE will address two fundamental questions: 'How do we use AI to improve education?' and 'How do we upskill our population in AI and prepare them for the jobs of the 21st century?' \n\n AI Assisted Revisions for Curricula (ARC): A developer tool for semi-automated revisions to training materials, by identifying areas to update based on an analysis of changes in doctrine, policy, or manuals. ",
      projectUrl:
        "https://ict.usc.edu/news/aircoee-ai-research-center-of-excellence-for-education/",
      imageUrl: aircoee, // Update with your actual image path
      techStack: [
        "React TypeScript",
        "Redux",
        "Node.js",
        "RESTful APIs",
        "GraphQL",
        "Docker",
        "Cypress",
        "MongoDB",
        "Microservices",
        "Role-based authentication",
      ],
    },
    {
      title: "Personal Assistant for Life Long Learning",
      description:
        "PAL3 is an embodied pedagogical AI framework for personalized adaptive learning on mobile devices.",
      completeDescription:
        "PAL3 is an embodied pedagogical AI framework for personalized adaptive learning on mobile devices, which provides on-the-job training, ongoing assessment and supports lifelong learning. PAL3 tracks where learners are (knowledge, past training and experience), where they want to go (career and learning goals), and uses that information to give personalized, adaptive coaching and resource recommendations to build a more resilient workforce. \n\n PAL3 is currently delivered as a smartphone or tablet app (iOS or Android). ",
      imageUrl: pal3,
      projectUrl:
        "https://ict.usc.edu/research/projects/personal-assistant-for-life-long-learning-pal3/",
      techStack: [
        "React TypeScript",
        "React Native",
        "Redux",
        "Node.js",
        "RESTful APIs",
        "GraphQL",
        "Cypress",
      ],
    },
    {
      title: "MentorPal Platform",
      description:
        "The MentorPal platform enables mentors to self-record videos answering common questions.",
      completeDescription:
        "The MentorPal platform enables mentors to self-record videos answering common questions, which are processed to build a question-answering virtual mentor. A mentor or a panel of mentors offers a personalized conversation, by responding to learner questions with videos that best answer these questions. \n\n Results: In the NDEP CareerFair.ai project,  both college and high school students reported that the virtual mentors helped them understand career topics they needed to know and 96% reported they would recommend it to others.",
      imageUrl: mentorpal,
      projectUrl: "https://mentorpal.org/home/",
      techStack: [
        "React TypeScript",
        "Redux",
        "Node.js",
        "RESTful APIs",
        "GraphQL",
        "Docker",
        "Cypress",
        "MongoDB",
        "AWS",
        "Role-based authentication",
      ],
    },
    {
      title: "Arctic Research Mapping Application",
      description:
        "ARMAP objective is to help NSF officials to plan, to coordinate, and to learn more about Arctic research and logistics.",
      completeDescription:
        "The Arctic Research Mapping Application is designed for funding agencies, logistics planners, research investigators, students, and others to explore information about science being conducted across the Arctic. Hundreds of project locations and ship tracks are shown on the interactive web map, with easy access to details on funding agency, funding program, scientific discipline, principal investigator, project title, and much more.",
      imageUrl: armap,
      projectUrl: "https://battellearcticgateway.org/armap/",
      techStack: [
        "React TypeScript",
        "Redux",
        "Node.js",
        "SQL Server Enterprise Geodatabases",
        "Spatial Database Engine (SDE)",
        "ArcGIS Pro",
        "Python",
        "ArcPy",
        "Sentry",
        "Custom npm packages",
        "ESRI JavaScript API",
        "CI/CD (GitHub Actions)",
      ],
    },
    {
      title: "Arctic Observing Viewer",
      description:
        "AOV is a web mapping application in support of U.S. SEARCH, AON, and other Arctic Observing networks.",
      completeDescription:
        "The Arctic Observing Viewer is a web mapping application in support of U.S. SEARCH, AON, and other Arctic Observing networks.  A collaborative effort, it helps answer the questions: \n - How can we know where to go if we don't know where we've been? \n - What resources already exist? \n - Is there overlap?  Where are the gaps?",
      imageUrl: aov,
      projectUrl: "https://battellearcticgateway.org/aov/",
      techStack: [
        "React TypeScript",
        "Redux",
        "Node.js",
        "SQL Server Enterprise Geodatabases",
        "Spatial Database Engine (SDE)",
        "ArcGIS Pro",
        "ArcGIS Online",
        "ArcGIS Enterprise",
        "Python",
        "ArcPy",
        "Sentry",
        "Custom npm packages",
        "ESRI JavaScript API",
        "CI/CD (GitHub Actions)",
      ],
    },
    {
      title: "Research Cruise Viewer",
      description:
        "Explore current vessel locations, planned routes, historic cruises across the Arctic, and more.",
      completeDescription:
        "The Research Cruise Viewer includes information on current vessel locations, planned routes and historic cruises across the Arctic which receive support from the US National Science Foundation. Additional cruises are included for operational awareness and as planned routes are available. Users can search by date, vessel name or search by principal investigator, research initiative or cruise name.",
      imageUrl: cruiceViewer,
      projectUrl: "https://battellearcticgateway.org/research-cruise-viewer/",
      techStack: [
        "React TypeScript",
        "Redux",
        "Node.js",
        "SQL Server Enterprise Geodatabases",
        "Spatial Database Engine (SDE)",
        "ArcGIS Pro",
        "ArcGIS Online",
        "ArcGIS Enterprise",
        "Python",
        "ArcPy",
        "Sentry",
        "Custom npm packages",
        "ESRI JavaScript API",
        "CI/CD (GitHub Actions)",
      ],
    },
    {
      title: "Arctic Spectral Library",
      description:
        "ASTRAL currently displays over 8,000 spectra spanning nearly 10 observation sites across the ABoVE domain about multiple tundra vegetation species and communities.",
      completeDescription:
        "ASTRAL currently displays over 8,000 spectra spanning nearly 10 observation sites across the ABoVE domain about multiple tundra vegetation species and communities.",
      imageUrl: astral,
      projectUrl: "https://prodgis02.utep.edu/ASTRAL_Viewer/",
      techStack: [
        "React TypeScript",
        "Redux",
        "Node.js",
        "ArcGIS Pro",
        "ArcGIS Online",
        "Python",
        "ArcPy",
        "Sentry",
        "Custom npm packages",
        "ESRI JavaScript API",
        "CI/CD (GitHub Actions)",
      ],
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        id="projects"
        sx={{
          minHeight: "calc(100vh - 64px - 60px)",
          py: 4,
          px: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>
              Projects
            </Typography>
            <Grid container spacing={4}>
              {projectData.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <ProjectCard {...project} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </motion.div>
      </Box>
    </ThemeProvider>
  );
};

export default Projects;
