// SectionWrapper.jsx
import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function SectionWrapper({ darkMode, id, children }) {
  return (
    <Box
      component={motion.section}
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      sx={{
        minHeight: "calc(100vh - 64px - 60px)", // Adjust for your header/footer heights
        backgroundColor: darkMode ? "#272727" : "#fff",
        scrollMarginTop: "80px",
        color: darkMode ? "#fff" : "#000",
        py: 4,
        px: 2,
      }}
    >
      {children}
    </Box>
  );
}

export default SectionWrapper;
