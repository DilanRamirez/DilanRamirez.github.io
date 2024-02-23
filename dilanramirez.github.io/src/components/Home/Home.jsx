import { Box, Typography } from "@mui/material";
import React from "react";

import "./home.css";
import DownArrow from "../DownArrow/DownArrow";

function Home(props) {
  return (
    <Box className="home-container">
      <Typography className="homepage-details-name">Dilan Ramirez</Typography>
      <Typography className="homepage-details-position">
        Software Engineer
      </Typography>
      <Typography className="homepage-details-position-2">
        Full-Stack Developer
      </Typography>
      <DownArrow
        sectionId={"about"}
        onClick={() => props.setCurrentSection(1)}
      />
    </Box>
  );
}

export default Home;
