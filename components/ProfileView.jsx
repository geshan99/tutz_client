import { Box, Divider, Rating, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/system";
import React from "react";
import ProfileInfo from "./ProfileInfo";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { useRouter } from "next/router";

const StyledAvatar = styled(Avatar)(() => ({
  backgroundColor: "#E5E5E5",
  color: "#7782B3",
}));

function ProfileView() {
  const router = useRouter();
  const currentUrl = router.asPath;

  return (
    <>
      {/* profile picture and name */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <StyledAvatar>NJ</StyledAvatar>
        <Typography
          variant="h6"
          sx={{
            color: "#072471",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}
        >
          Nishan Jayasooriya
          <VerifiedOutlinedIcon sx={{ marginLeft: "0.5rem" }} />
        </Typography>
        {currentUrl === "/TutorProfile" ? (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Rating
                name="read-only"
                size="small"
                value={5}
                readOnly
                sx={{
                  mx: { md: "15px", xs: "0px" },
                }}
              />
              <Typography variant="subtitle1">5.0</Typography>
            </Box>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="#6C6E74"
            >
              Member since December 2006
            </Typography>
          </>
        ) : (
          ""
        )}
      </Box>

      {/* teacher description */}
      <ProfileInfo />
    </>
  );
}

export default ProfileView;
