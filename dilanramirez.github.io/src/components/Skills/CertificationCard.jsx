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
          {description}
        </Typography>
      </ListItem>
    </List>
  ));
  return (
    <Box style={{ maxHeight: "100%", overflowY: "auto" }}>
      <Typography className="card-name">{name}</Typography>
      <div className="card-description">{description_list}</div>
      <div className="card-skills">{skills_list}</div>

      <div className="certification-details">
        <div className="details-left">
          <div className="organization">
            <Typography className="card-subtext-3">Issued by</Typography>
            <Typography className="card-subtext-2">
              {issuing_organization}
            </Typography>
          </div>
          <div>
            <Typography className="card-subtext-3">Credential ID</Typography>
            <Typography className="card-subtext-2">{credential_id}</Typography>
          </div>
        </div>
        <div className="details-right">
          <div>
            <Typography className="card-subtext-3">Issuing Date</Typography>
            <Typography className="card-subtext-2">{issuing_date}</Typography>
          </div>
          <div>
            <Typography className="card-subtext-3">Expiration Date</Typography>
            <Typography className="card-subtext-2">
              {expiration_date}
            </Typography>
          </div>
        </div>
      </div>
      <div className="card-certificate">
        <Button
          variant="contained"
          className={`card-btn-${unique}`}
          href={credential_url}
        >
          Certificate
        </Button>
      </div>

      {/* <Typography>{credential_url}</Typography> */}
    </Box>
  );
}

export default CertificationCard;
