import { Box, Typography } from "@mui/material";
import React from "react";
import CertificationCard from "./CertificationCard";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Carousel from "react-multi-carousel";
import { certification_data } from "./data";
import SkillsCarousel from "./SkillsCarousel";

import "./skills.css";
import "react-multi-carousel/lib/styles.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Skills() {
  // const certification_cards = certification_data.map(
  //   (certification_card, key) => (
  //     <Grid item xs={1} md={3} key={key}>
  //       <Item className={`card-container-${key}`}>
  //         <CertificationCard
  //           name={certification_card.name}
  //           issuing_organization={certification_card.issuing_organization}
  //           issuing_date={certification_card.issuing_date}
  //           credential_id={certification_card.credential_id}
  //           description={certification_card.description}
  //           skills={certification_card.skills}
  //           expiration_date={certification_card.expiration_date}
  //           credential_url={certification_card.credential_url}
  //           unique={key}
  //         />
  //       </Item>
  //     </Grid>
  //   )
  // );

  const certification_cards = certification_data.map(
    (certification_card, key) => (
      <CertificationCard
        name={certification_card.name}
        issuing_organization={certification_card.issuing_organization}
        issuing_date={certification_card.issuing_date}
        credential_id={certification_card.credential_id}
        description={certification_card.description}
        skills={certification_card.skills}
        expiration_date={certification_card.expiration_date}
        credential_url={certification_card.credential_url}
        unique={key}
      />
    )
  );

  return (
    <Box className="skills-container">
      <div className="certification-container">
        <Typography className="certification-title">Certifications</Typography>
        <Box sx={{ width: "100%" }}>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            arrows={false}
            renderDotsOutside={true}
          >
            {certification_cards}
          </Carousel>
        </Box>
      </div>
    </Box>
  );
}

export default Skills;
