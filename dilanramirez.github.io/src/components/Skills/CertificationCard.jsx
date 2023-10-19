import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

/*
    - 
*/
function CertificationCard({
  name,
  issuing_organization,
  issuing_date,
  credetial_id,
  credetial_url,
}) {
  return (
    <Box>
      <Typography>{name}</Typography>
      <Typography>{issuing_organization}</Typography>
      <Typography>{issuing_date}</Typography>
      <Typography>{credetial_id}</Typography>
    </Box>
  );
}

export default CertificationCard;
