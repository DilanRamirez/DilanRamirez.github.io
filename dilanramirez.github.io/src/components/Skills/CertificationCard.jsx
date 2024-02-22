import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import "./skills.css";

function CertificationCard({
  name,
  issuing_organization,
  issuing_date,
  credential_id,
  description,
  skills,
  expiration_date,
  credential_url,
  unique,
}) {
  console.log(unique);
  const skills_list = skills.map((skill, key) => (
    <List>
      <ListItem disablePadding>
        <ListItemIcon>
          <CheckIcon style={{ fontSize: 8 }} />
        </ListItemIcon>
        <Typography className="card-subtext" key={key}>
          {skill}
        </Typography>
      </ListItem>
    </List>
  ));
  const description_list = description.map((description, key) => (
    <List>
      <ListItem>
        <Typography className="card-subtext" key={key}>
          - {description}
        </Typography>
      </ListItem>
    </List>
  ));
  return (
    <div className="certification-card-container">
      <Box className="certification-card-wrapper">
        <Typography className="card-name">{name}</Typography>
        <div className="card-description">
          <Typography
            className="card-subtext-3"
            style={{ textAlign: "left", marginLeft: 5 }}
          >
            Description
          </Typography>
          {description_list}
        </div>
        <div className="card-skills">
          <Typography
            className="card-subtext-3"
            style={{ textAlign: "left", marginLeft: 5 }}
          >
            Skills
          </Typography>
          {skills_list}
        </div>

        <div className="certification-details">
          <div>
            <Typography className="card-subtext-3">Credential ID</Typography>
            <Typography className="card-subtext-2">{credential_id}</Typography>
          </div>
        </div>
      </Box>
      <Button
        variant="contained"
        className={`card-btn-${unique} card-btn`}
        href={credential_url}
        target="_blank"
      >
        Certificate
      </Button>
    </div>
  );
}

export default CertificationCard;
