import SingleAd from "./SingleAd";
import BackgroundImage from "public/Images/Background.png";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/system";
import Navbar from "@/components/Navbar";

const CustomButton = styled(Button)(() => ({
  border: "1px solid #228BE6",
  borderRadius: "8px",
  padding: "16px 48px",
  width: "317px",
  height: "57px",
  color: "#228BE6",
  fontSize: "20px",
  textTransform: "none",
  whiteSpace: "nowrap",
  fontWeight: "600",
  "&:hover": {
    background: "#228BE6",
    color: "#ffffff",
  },
}));

function HomePage() {
  return (
    <>
      <Box
        sx={{
          background:
            "radial-gradient(75.88% 75.88% at 16.11% 80.85%,rgba(2, 158, 235, 0.23577) 0%, rgba(2, 158, 235, 0.5) 0%, rgba(2, 158, 235, 0)88.12%);",
        }}
      >
        {/* <Navbar /> */}
        <Box
          sx={{
            // marginTop: "70px",
            height: "600px",
            width: "100%",
            position: "relative",
            backgroundImage: "url(/Images/Background.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Grid container paddingTop="84px">
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                color: "white",
                paddingLeft: { md: "187px", xs: "10px" },
              }}
            >
              <Typography
                sx={{
                  width: { md: "470px", xs: "auto" },
                  fontWeight: { md: "700", xs: "700" },
                  fontSize: { md: "48px", xs: "30px" },
                  lineHeight: { md: "61px", xs: "50px" },
                }}
              >
                Find the best tutors in Sri Lanka.
              </Typography>
              <Typography
                sx={{
                  width: { md: "499px", xs: "auto" },
                  fontWeight: { md: "600", xs: "600" },
                  fontSize: { md: "20px", xs: "15px" },
                  lineHeight: { md: "25px", xs: "25px" },
                  letterSpacing: "-0.025em",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent nec orci ut metus dapibus vehicula. Cras eget sem id ex
                commodo vulputate eu a est.
              </Typography>

              <CustomButton style={{ marginTop: "32px" }}>
                Browse Classes
              </CustomButton>
              <CustomButton style={{ marginTop: "10px" }}>
                Browse Class Requests
              </CustomButton>
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src="/Images/5 SCENE.png"
                alt="Image"
                width={538}
                height={377}
                quality={100}
              />
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            height: "500px",
          }}
        >
          <Box />
          {/* <Box sx={{ backgroundColor: "#072471", height: "500px" }}></Box> */}
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
