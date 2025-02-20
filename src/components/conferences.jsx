// Conferences.js
import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
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

const conferences = [
  {
    title:
      "Bridging Science and Community: Advancing Web Mapping Tools for Arctic Research",
    date: "AGU24, Dec 2024",
    description:
      "Co-authored to advance web mapping tools for Arctic research and foster collaboration.",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=V2_gYEkAAAAJ&citation_for_view=V2_gYEkAAAAJ:Tyk-4Ss8FVUC",
  },
  {
    title: "Esri Developer Summit",
    date: "Mar 12–15, 2024",
    description:
      "Attended in person to explore cutting-edge mapping technologies and advanced ArcGIS APIs.",
    url: "",
  },
  {
    title: "Fostering Collaboration through Open Science and Web Mapping",
    date: "AGU Fall Meeting, Dec 2023",
    description:
      "Co-developed ARMAP to enhance Arctic research collaboration and outreach.",
    url: "https://ui.adsabs.harvard.edu/abs/2023AGUFM.C11C1058B/abstract",
  },
  {
    title: "MentorStudio: Amplifying Diverse Voices via Virtual Mentors",
    date: "Published, July 2023",
    description:
      "Co-authored research on a video-based virtual mentor platform for underserved STEM students.",
    url: "https://zenodo.org/records/8226275",
  },
  {
    title:
      "Designing a Rapid Adaptive Content Registry (RACR) for Adaptive Learning",
    date: "Conference, 2022",
    description:
      "Presented a machine learning-enabled tool to streamline content integration.",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=es&user=zThV9mUAAAAJ&sortby=pubdate&citation_for_view=zThV9mUAAAAJ:1sJd4Hv_s6UC",
  },
  {
    title:
      "Improving Interoperability within the Arctic Research Data Life Cycle",
    date: "AGU Fall Meeting, Dec 2022",
    description:
      "Developed secure data services to boost Arctic research data sharing and visualization.",
    url: "https://ui.adsabs.harvard.edu/abs/2022AGUFMIN21A..02B/abstract",
  },
  {
    title: "New Workflows Repurpose Geotagged Information to Improve Outreach",
    date: "AGU Fall Meeting, Dec 2021",
    description:
      "Enhanced ARMAP and AOV for improved outreach using real-time geotagged data.",
    url: "https://ui.adsabs.harvard.edu/abs/2021AGUFMED15C0540B/abstract",
  },
  {
    title: "3D Viewers, Dashboard, and Data Services for Arctic Science",
    date: "AGU Fall Meeting, Dec 2020",
    description:
      "Advanced ARMAP and AOV with real-time ship tracking, 3D viewers, and a dashboard.",
    url: "https://ui.adsabs.harvard.edu/abs/2020AGUFMSY047..16B/abstract",
  },
  {
    title:
      "The Arctic Research Mapping Application and Arctic Observing Viewer Applications Support Earth Science Planning",
    date: "AGU Fall Meeting, Dec 2019",
    description:
      "Optimized ARMAP and AOV with 3D models and enhanced backend performance for data sharing.",
    url: "https://ui.adsabs.harvard.edu/abs/2019AGUFMIN53B0747B/abstract",
  },
];

const Conferences = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        id="conferences"
        sx={{
          minHeight: "calc(100vh - 64px - 60px)",
          scrollMarginTop: "20px",
          py: 4,
          px: 2,
        }}
      >
        <Container maxWidth="lg" sx={{ minHeight: "100vh", py: 4 }}>
          <Typography variant="h4" gutterBottom>
            Conferences & Presentations
          </Typography>
          <Grid container spacing={4}>
            {conferences.map((conf, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    border: "1px solid #000",
                    position: "relative",
                    minHeight: "350px",
                    maxHeight: "350px",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {conf.title}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      gutterBottom
                    >
                      {conf.date}
                    </Typography>
                    <Typography variant="body2">{conf.description}</Typography>
                  </CardContent>
                  <Box
                    sx={{
                      backgroundColor: "#000",
                      color: "#fff",
                      textAlign: "center",
                      py: 1,
                      position: "absolute",
                      bottom: 0,
                      width: "100%",
                    }}
                  >
                    <a
                      href={conf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      Learn More
                    </a>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Conferences;
