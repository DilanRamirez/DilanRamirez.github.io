import React from "react";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "./downarrow.css";

function DownArrow({ sectionId }) {
  const onDownArrowClick = () => {
    if (sectionId) {
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    }
    return;
  };
  return (
    <div className="downarrow-container">
      <Button
        onClick={onDownArrowClick}
        endIcon={<KeyboardArrowDownIcon className="arrowdown" />}
      />
    </div>
  );
}

export default DownArrow;
