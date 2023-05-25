import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";

import { useRouter } from "next/router";

const StyledPrimaryTypography = styled(Typography)(() => ({
  textTransform: "uppercase",
  color: "#6C6E74",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "15px",
  letterSpacing: "0.2em",
}));
const StyledSecondaryTypography = styled(Typography)(() => ({
  color: "#222325",
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "20px",
  letterSpacing: "-0.025em",
}));
const CustomButton = styled(Button)(() => ({
  border: "1px solid #072471",
  borderRadius: "8px",
  padding: "8px 24px ",
  height: "46px",
  color: "#072471",
  "&:hover": {
    background: "#072471",
    color: "#ffffff",
  },
}));

function ProfileInfo() {
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState("/TutorProfile");

  useEffect(() => {
    setCurrentUrl(router.asPath);
    console.log(currentUrl);
  }, []);

  return (
    <>
      {currentUrl === "/TutorProfile" ? (
        ""
      ) : (
        <>
          <Divider
            sx={{
              borderBottomWidth: 2,
              backgroundColor: "#D9DEE8",
              marginY: "10px",
            }}
          />
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item md={6} xs={6}>
              <List>
                <ListItem sx={{ display: "block", padding: "0px" }}>
                  <ListItemText
                    primary={
                      <StyledPrimaryTypography>Medium</StyledPrimaryTypography>
                    }
                    secondary={
                      <StyledSecondaryTypography>
                        Sinhala
                      </StyledSecondaryTypography>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item md={6} xs={6}>
              <List>
                <ListItem sx={{ display: "block", padding: "0px" }}>
                  <ListItemText
                    primary={
                      <StyledPrimaryTypography>
                        platform
                      </StyledPrimaryTypography>
                    }
                    secondary={
                      <StyledSecondaryTypography>
                        Online
                      </StyledSecondaryTypography>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item md={6} xs={6}>
              <List>
                <ListItem sx={{ display: "block", padding: "0px" }}>
                  <ListItemText
                    primary={
                      <StyledPrimaryTypography>type</StyledPrimaryTypography>
                    }
                    secondary={
                      <StyledSecondaryTypography>
                        Individual
                      </StyledSecondaryTypography>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item md={6} xs={6}>
              <List>
                <ListItem sx={{ display: "block", padding: "0px" }}>
                  <ListItemText
                    primary={
                      <StyledPrimaryTypography>gender</StyledPrimaryTypography>
                    }
                    secondary={
                      <StyledSecondaryTypography>
                        Male
                      </StyledSecondaryTypography>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item md={12} xs={12}>
              <List>
                <ListItem sx={{ display: "block", padding: "0px" }}>
                  <ListItemText
                    primary={
                      <StyledPrimaryTypography>Subject</StyledPrimaryTypography>
                    }
                    secondary={
                      <StyledSecondaryTypography>
                        Physics
                      </StyledSecondaryTypography>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item md={6} xs={12}>
              <List>
                <ListItem sx={{ display: "block", padding: "0px" }}>
                  <ListItemText
                    primary={
                      <StyledPrimaryTypography>
                        locations
                      </StyledPrimaryTypography>
                    }
                    secondary={
                      <StyledSecondaryTypography>
                        Nugegoda Maharagama Homagama
                      </StyledSecondaryTypography>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </>
      )}

      {/* buttons */}
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
        marginTop={1}
      >
        <Grid item md={12} xs={12}>
          <CustomButton startIcon={<SmsOutlinedIcon />} fullWidth>
            Chat
          </CustomButton>
        </Grid>
        <Grid item md={12} xs={12}>
          <CustomButton
            variant="outlined"
            startIcon={<CallOutlinedIcon />}
            fullWidth
          >
            Call
          </CustomButton>
        </Grid>
        {currentUrl === "/TutorProfile" ? (
          <Grid item md={12} xs={12}>
            <Divider
              sx={{
                borderBottomWidth: 2,
                backgroundColor: "#D9DEE8",
                marginY: "10px",
              }}
            />

            <Box marginTop={2}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                }}
              >
                About
              </Typography>
              <Typography variant="body1" align="justify" sx={{ my: 2 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                nam quos ad voluptate optio, iste reiciendis magnam,
                voluptatibus commodi fugit quia beatae! Dolores, illum
                voluptate! Quos, explicabo? Tempora quam quo blanditiis nam cum,
                dolorem dolor aliquam ullam! Harum culpa esse ipsa et facilis
                adipisci dignissimos nam natus, tenetur, soluta quam! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Velit nam
                quos ad voluptate optio, iste reiciendis magnam, Tempora quam
                quo blanditiis nam cum, tenetur, soluta quam!
              </Typography>
            </Box>
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </>
  );
}

export default ProfileInfo;
