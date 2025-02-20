import React from "react";
import { Box, Container, Typography } from "@mui/material";
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

function Footer({ darkMode }) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="footer"
        sx={{
          position: "sticky",
          bottom: 0,
          backgroundColor: darkMode ? "#272727" : "#fff",
          color: darkMode ? "#fff" : "#858585",
          borderTop: "1px solid #ccc",
          height: "60px", // Explicitly define footer height
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Dilan Ramirez. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Footer;
