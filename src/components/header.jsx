// Header.js
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider } from "@mui/material/styles";
import useActiveSection from "./hooks/use-active-section";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

// Define your portfolio sections here
const sections = [
  { label: "Home", anchor: "home" },
  { label: "Projects", anchor: "projects" },
  { label: "Skills", anchor: "skills" },
  { label: "Contact me", anchor: "contactme" },
  { label: "Certifications", anchor: "certifications" },
  { label: "Conferences & Presentations", anchor: "conferences" },
];

// Smooth scroll helper function
const handleScroll = (anchor) => {
  const element = document.getElementById(anchor);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function Header({ darkMode, setDarkMode }) {
  // Get the active section for highlighting
  const activeSection = useActiveSection(
    sections.map((s) => s.anchor),
    80
  );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: darkMode ? "#272727 !important" : "#fff",
          color: theme.palette.text.primary,
          boxShadow: "none",
          borderBottom: `1px solid #ccc`,
          height: "64px",
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            minHeight: "64px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: isMobile ? "100%" : "30%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: darkMode ? "#000" : "#fff",
                backgroundColor: darkMode ? "#fff" : "#000",
                borderRadius: 2,
                padding: "2px 8px",
              }}
            >
              Dilan Ramirez
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <IconButton
                size="large"
                href="https://www.linkedin.com/in/dilanramirez/"
                target="_blank"
                sx={{ color: theme.palette.text.primar }}
              >
                <LinkedInIcon style={{ fontSize: isMobile ? "20px" : 25 }} />
              </IconButton>
              <IconButton
                size="large"
                href="https://github.com/dilanramirez"
                target="_blank"
                sx={{ color: theme.palette.text.primary }}
              >
                <GitHubIcon style={{ fontSize: isMobile ? "20px" : 25 }} />
              </IconButton>
              <IconButton
                size="large"
                href="mailto:drramirezra@gmail.com"
                sx={{ color: theme.palette.text.primary }}
              >
                <EmailIcon style={{ fontSize: isMobile ? "20px" : 25 }} />
              </IconButton>
            </Box>
          </Box>

          {isMobile ? (
            <>
              <IconButton onClick={toggleDrawer(true)} color="inherit">
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    {sections.map((section) => (
                      <ListItem key={section.label} disablePadding>
                        <ListItemButton
                          onClick={() => handleScroll(section.anchor)}
                        >
                          <ListItemText primary={section.label} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box>
              {sections.map((section) => (
                <Button
                  key={section.label}
                  onClick={() => handleScroll(section.anchor)}
                  sx={{
                    color: activeSection === section.anchor ? "#fff" : "#000",
                    backgroundColor:
                      activeSection === section.anchor ? "#000" : "#fff",
                    textTransform: "none",
                    fontWeight: "bold",
                    mx: 0.5,
                  }}
                >
                  {section.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
