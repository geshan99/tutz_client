import { Typography } from "@mui/material";
import React from "react";

const Advertisements = ({ height }) => {
  return (
    <>
      <div
        style={{
          height: height ? height : "",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>Advertisements</Typography>
      </div>
    </>
  );
};

export default Advertisements;
