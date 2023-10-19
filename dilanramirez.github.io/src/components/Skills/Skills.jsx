import { Box, Typography } from "@mui/material";
import React from "react";
import CertificationCard from "./CertificationCard";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Skills() {
  return (
    <Box className="skills-container">
      <div className="certification-container">
        <Typography>Certifications</Typography>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 3, sm: 3, md: 3 }}
          >
            <Grid item xs={1} md={3}>
              <Item>
                <CertificationCard
                  name={" Developing AI Applications with Python and Flask"}
                  issuing_organization={"IBM"}
                  issuing_date={"2023"}
                  credetial_id={"4UX5AMH6PUFU"}
                />
              </Item>
            </Grid>
            <Grid item xs={1} md={3}>
              <Item>
                <CertificationCard />
              </Item>
            </Grid>
            <Grid item xs={1} md={3}>
              <Item>
                <CertificationCard />
              </Item>
            </Grid>
            <Grid item xs={1} md={3}>
              <Item>
                <CertificationCard />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div>
        <Typography>Skills</Typography>
      </div>
    </Box>
  );
}

export default Skills;
