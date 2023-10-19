import { Box, Typography } from "@mui/material";
import React from "react";
import CertificationCard from "./CertificationCard";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { certification_data } from "./data";

import "./skills.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Skills() {
  const certification_cards = certification_data.map(
    (certification_card, key) => (
      <Grid item xs={1} md={3} key={key}>
        <Item className={`card-container-${key}`}>
          <CertificationCard
            name={certification_card.name}
            issuing_organization={certification_card.issuing_organization}
            issuing_date={certification_card.issuing_date}
            credential_id={certification_card.credential_id}
            description={certification_card.description}
            skills={certification_card.skills}
            expiration_date={certification_card.expiration_date}
            credential_url={certification_card.credential_url}
            unique={key}
          />
        </Item>
      </Grid>
    )
  );

  return (
    <Box className="skills-container">
      <div className="certification-container">
        <Typography>Certifications</Typography>
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={1}>
            {certification_cards}
          </Grid>
        </Box>
      </div>
    </Box>
  );
}

export default Skills;
