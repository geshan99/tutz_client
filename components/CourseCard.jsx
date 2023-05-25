import styled from "@emotion/styled";
import { Grid, Box, Typography, Rating } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

import React from "react";

const CourseCard = ({ data }) => {
  return (
    <>
      {data.sponsored ? (
        <Typography
          sx={{
            lineHeight: "10px",
            display: "flex",
            fontSize: "10.8px",
            // fontWeight: "bold",
            justifyContent: "flex-end",
            color: "#FE9696",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
          }}
        >
          sponsored
        </Typography>
      ) : (
        ""
      )}

      <Grid container spacing={2} direction="row" key={data.id}>
        <Grid item md={3}>
          <Box
            width="100%"
            sx={{
              height: { md: "100%", xs: "auto" },
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{
                borderRadius: "10px",
                width: "100%",
                height: "100%",
                maxHeight: "100%",
              }}
              src={data.image}
            ></img>
          </Box>
        </Grid>
        <Grid item md={9} sx={{ height: "100%" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "505",
              display: "flex",
              align: "left",
            }}
          >
            {data.class_name}
          </Typography>
          <Typography variant="body2" align="justify" sx={{ my: 1 }}>
            {data.class_description}
          </Typography>
          <Grid
            item
            md={12}
            sx={{
              display: "flex",
              direction: { md: "row", xs: "column" },
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                marginRight: { md: "8%", xs: "0px" },
                alignItems: "center",
              }}
            >
              <Rating
                name="read-only"
                size="small"
                value={1}
                max={1}
                readOnly
              />
              <Typography variant="body2">{data.rating}</Typography>
              <Typography
                sx={{ display: "inline" }}
                variant="body2"
                color="#6C6E74"
              >
                ({data.ratingCount})
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                marginRight: { md: "8%", xs: "0px" },
                alignItems: "center",
              }}
            >
              <LocationOnOutlinedIcon fontSize="small" />
              <Typography
                sx={{ display: "inline" }}
                variant="body2"
                color="#6C6E74"
              >
                {data.class_location}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                marginRight: { md: "8%", xs: "0px" },
                alignItems: "center",
              }}
            >
              <CreateOutlinedIcon fontSize="small" />
              <Typography
                sx={{ display: "inline" }}
                variant="body2"
                color="#6C6E74"
              >
                {data.subject}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CourseCard;
