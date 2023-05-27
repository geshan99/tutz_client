import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box, Paper, Grid, Button } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";

const CustomButton = styled(Button)(({ selected }) => ({
  background: selected ? "#072471" : "#ffffff",
  border: selected ? "1px solid #072471" : "1px solid #ffffff",
  borderRadius: "8px",
  padding: "16px 48px",
  width: "100%",
  height: "57px",
  color: selected ? "#ffffff" : "#072471",
  fontSize: "20px",
  textTransform: "none",
  whiteSpace: "nowrap",
  fontWeight: "600",
  "&:hover": {
    border: "1px solid #072471",
    background: "#072471",
    color: "#ffffff",
  },
}));

const CTab = styled(Tab)(() => ({
  background: "#ffffff",
  border: "1px solid #D9DEE8",
  borderRadius: "8px",
  fontWeight: "400",
  marginBottom: "6px",
  padding: "24px 48px",
  color: "black",
  "&:hover": {
    border: "1px solid #228BE6",
    background: "#228BE6",
    color: "#ffffff",
  },
  "&.Mui-selected": {
    border: "1px solid #228BE6",
    background: "#228BE6",
    color: "#ffffff",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [selectedButton, setSelectedButton] = useState("browseClasses");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        direction="row"
        spacing={2}
        marginBottom="20px"
      >
        <Grid item md={3}>
          <CustomButton
            selected={selectedButton === "browseClasses"}
            onClick={() => handleButtonClick("browseClasses")}
          >
            Browse Classes
          </CustomButton>
        </Grid>
        <Grid item md={3}>
          <CustomButton
            selected={selectedButton === "browseClassRequests"}
            onClick={() => handleButtonClick("browseClassRequests")}
          >
            Browse Class Requests
          </CustomButton>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          direction: "row",
        }}
      >
        <Grid item md={3}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            orientation="vertical"
            indicatorColor="transparent"
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <CTab label="Pre School to Grade 5" {...a11yProps(0)} />
            <CTab label="Grade 6 to Grade 9" {...a11yProps(1)} />
            <CTab label="Grade 10 to Grade 11" {...a11yProps(2)} />
            <CTab label="Grade 12 to Grade 13" {...a11yProps(3)} />
          </Tabs>
        </Grid>
        <Grid item md={3}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "98%",
            }}
          >
            <TabPanel value={value} index={0}>
              Pre School to Grade 5
            </TabPanel>
            <TabPanel value={value} index={1}>
              Grade 6 to Grade 9
            </TabPanel>
            <TabPanel value={value} index={2}>
              Grade 10 to Grade 11
            </TabPanel>
            <TabPanel value={value} index={3}>
              Grade 12 to Grade 13
            </TabPanel>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
