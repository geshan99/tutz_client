import styled from "@emotion/styled";
import React from "react";
import { Paper } from "@mui/material";

const Item = styled(Paper)(() => ({
  backgroundColor: "#ffffff",
  border: "1px solid #D9DEE8",
  borderRadius: "16px",
  elevation: 2,
  padding: "32px",
  justifyContent: "center",
  align: "center",
}));

function PaperFrame({ children }) {
  return <Item>{children}</Item>;
}

export default PaperFrame;
