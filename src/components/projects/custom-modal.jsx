import React, { useState } from "react";
import {
  Button,
  Modal,
  Box,
  Typography,
  Link,
  Chip,
  Grid,
} from "@mui/material";

const CustomModal = ({
  title,
  completeDescription,
  imageUrl,
  projectUrl,
  techStack,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="outlined"
        sx={{
          textTransform: "none",
          fontWeight: "bold",
          borderColor: "#000",
          color: "#000",
          "&:hover": { backgroundColor: "#f0f0f0" },
        }}
      >
        View Details
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
      >
        <Box sx={style}>
          {imageUrl && (
            <Box sx={{ mb: 2 }}>
              <img
                src={imageUrl}
                alt={title}
                style={{ width: "100%", borderRadius: 4 }}
              />
            </Box>
          )}
          <Typography
            id="project-modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: 1 }}
          >
            {title}
          </Typography>
          <Typography
            id="project-modal-description"
            variant="body2"
            sx={{ mb: 2 }}
          >
            {completeDescription.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Typography>
          {techStack && techStack.length > 0 && (
            <Grid container spacing={1} sx={{ mb: 2 }}>
              {techStack.map((tech, idx) => (
                <Grid item key={idx}>
                  <Chip
                    label={tech}
                    variant="outlined"
                    size="small"
                    sx={{ borderColor: "#000", color: "#000" }}
                  />
                </Grid>
              ))}
            </Grid>
          )}
          {projectUrl && (
            <Link
              href={projectUrl}
              target="_blank"
              rel="noopener"
              sx={{ fontWeight: "bold", textDecoration: "none", color: "#000" }}
            >
              Visit Project
            </Link>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default CustomModal;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 400 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  outline: "none",
};
