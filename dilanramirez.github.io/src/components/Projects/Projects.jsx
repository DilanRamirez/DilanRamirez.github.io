import { Box, Typography } from "@mui/material";
import React from "react";
import { projects } from "./data";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projectCards = projects.map((project, unique) => (
    <ProjectCard
      key={unique}
      name={project.name}
      short_description={project.short_description}
      long_description={project.long_description}
      skills={project.skills}
      github={project.github}
      url={project.url}
    />
  ));

  return (
    <Box>
      <Typography>Projects</Typography>
      {/* {projectCards} */}
    </Box>
  );
}

export default Projects;
