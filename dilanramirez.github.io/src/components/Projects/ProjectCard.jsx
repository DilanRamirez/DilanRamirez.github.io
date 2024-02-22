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

import "./projects.css";

function ProjectCard({
  name,
  short_description,
  long_description,
  github,
  skills,
  url,
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
  const longDescription = long_description.map((description, key) => (
    <List>
      <ListItem>
        <Typography className="card-subtext" key={key}>
          - {description}
        </Typography>
      </ListItem>
    </List>
  ));

  return (
    <Box style={{ maxHeight: "100%", overflowY: "auto" }}>
      <Typography className="card-name">{name}</Typography>
      <div className="card-description">
        <Typography
          className="card-subtext-3"
          style={{ textAlign: "left", marginLeft: 5 }}
        >
          Description
        </Typography>
        {short_description}
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

      <div className="card-certificate">
        <Button
          variant="contained"
          className={`card-btn-${unique}`}
          href={github}
          target="_blank"
        >
          github
        </Button>
        <Button
          variant="contained"
          className={`card-btn-${unique}`}
          href={url}
          target="_blank"
        >
          url
        </Button>
      </div>

      {/* <Typography>{credential_url}</Typography> */}
    </Box>
  );
}

export default ProjectCard;
