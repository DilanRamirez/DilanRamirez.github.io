import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import "./about.css";
import DownArrow from "../DownArrow/DownArrow";

function About() {
  return (
    <Box className="about-container">
      <Typography className="about-title">
        <Typewriter
          words={["Passionate about Leveraging Technology for Impact!"]}
          typeSpeed={80}
          cursor={true}
          loop={1}
        />
      </Typography>
      <Typography className="about-description">
        With a strong background in creating efficient web applications, I've
        journeyed from building React JS components to collaborating on research
        projects. Armed with a Bachelor's degree in Computer Science and
        experience at the University of Texas at El Paso and the University of
        Southern California, I've honed my skills in the ever-evolving tech
        world. My belief in technology's positive impact drives me to tackle
        challenges, seek innovative solutions, and foster collaboration. Let's
        connect for opportunities or tech discussions – I'm eager to learn,
        grow, and connect with professionals like you!"
      </Typography>
      <DownArrow sectionId={"skills"} />
    </Box>
  );
}

export default About;
