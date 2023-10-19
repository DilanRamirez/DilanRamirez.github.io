import { Box, Typography, Button } from "@mui/material";
import React from "react";

import "./home.css";
import DownArrow from "../DownArrow/DownArrow";

function Home() {
  return (
    <Box className="home-container">
      <Typography className="homepage-details-name">Dilan Ramirez</Typography>
      <Typography className="homepage-details-position">
        Software Engineer
      </Typography>
      <Typography className="homepage-details-position-2">
        Full-Stack Developer
      </Typography>
      <DownArrow sectionId={"about"} />
    </Box>
  );
}

export default Home;
