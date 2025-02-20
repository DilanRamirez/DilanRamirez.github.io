// Contact.js
import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: { fontFamily: "Poppins, sans-serif" },
  palette: {
    mode: "light",
    primary: { main: "#000" },
    text: { primary: "#000" },
    background: { default: "#fff" },
  },
});

const Contact = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        id="contactme"
        maxWidth="sm"
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          py: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="body1" paragraph>
          Have a question or want to work together? Fill out the form below.
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField label="Name" variant="outlined" fullWidth />
          <TextField label="Email" variant="outlined" fullWidth />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
          />
          <Button variant="outlined" size="large">
            Send Message
          </Button>
        </Box>
        {/* Resume Download Section */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" gutterBottom>
            Or Download My Resume
          </Typography>
          <Button
            variant="outlined"
            size="large"
            href="/Dilan_Ramirez_FullStack_Software_Engineer_Resume.pdf"
            target="_blank"
          >
            Download Resume
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Contact;
