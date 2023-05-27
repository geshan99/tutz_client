import ClassTabs from "../components/ClassTabs";
import BackgroundImage from "public/Images/Background.png";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CustomButton = styled(Button)(({ selected }) => ({
  border: "1px solid #228BE6",
  background: selected ? "#228BE6" : "",
  borderRadius: "8px",
  padding: "16px 48px",
  width: "317px",
  height: "57px",
  color: selected ? "#ffffff" : "#228BE6",
  fontSize: "20px",
  textTransform: "none",
  whiteSpace: "nowrap",
  fontWeight: "600",
  "&:hover": {
    background: "#228BE6",
    color: "#ffffff",
  },
}));
const Item = styled(Paper)(() => ({
  border: "1px solid #D9DEE8",
  borderRadius: "16px",

  elevation: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
            padding: "95px",
          }}
        >
          <ClassTabs />
        </Box>
        <Box
          sx={{
            backgroundColor: "#072471",
          }}
        >
          <Grid
            container
            spacing={2}
            direction="row"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "80px 0px",
            }}
          >
            <Grid item md={7} xs={12}>
              <Item>
                <Grid item container>
                  <Grid item md={6} margin="48px 0px 48px 72px">
                    <Typography
                      sx={{
                        fontSize: "31px",
                        fontWeight: "700",
                        lineHeight: "40px",
                        letterSpacing: "-0.045em",
                        color: "#072471",
                      }}
                    >
                      For Tutors
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                        lineHeight: "25px",
                        letterSpacing: "-0.025em",
                        color: "#000000",
                      }}
                    >
                      <div>Do you have classes?</div>
                      Post your ad and start finding students
                    </Typography>
                    <CustomButton
                      selected={true}
                      endIcon={<ArrowForwardIcon />}
                      style={{ marginTop: "16px" }}
                    >
                      Post your ad for free
                    </CustomButton>
                  </Grid>
                  <Image
                    src="/Images/4 SCENE.png"
                    width={357}
                    height={250}
                    quality={100}
                    alt="image"
                  ></Image>
                </Grid>
              </Item>
            </Grid>
            <Grid item md={7} xs={12}>
              <Item>
                <Grid item container>
                  <Image
                    src="/Images/1 SCENE 1.png"
                    width={357}
                    height={250}
                    quality={100}
                    alt="image"
                  ></Image>
                  <Grid item md={6} margin="48px 72px 48px 0px">
                    <Typography
                      sx={{
                        fontSize: "31px",
                        fontWeight: "700",
                        lineHeight: "40px",
                        letterSpacing: "-0.045em",
                        color: "#072471",
                      }}
                    >
                      For Students
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                        lineHeight: "25px",
                        letterSpacing: "-0.025em",
                        color: "#000000",
                      }}
                    >
                      <div>Do you want to find a tutor?</div>
                      Post your request and start finding tutors.
                    </Typography>
                    <CustomButton
                      selected={true}
                      endIcon={<ArrowForwardIcon />}
                      style={{ marginTop: "16px" }}
                    >
                      Post your class request
                    </CustomButton>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            height: "500px",
            backgroundColor: "#ffffff",
          }}
        >
          Footer
        </Box>
        <Box
          sx={{
            height: "99px",
            backgroundColor: "#072471",
          }}
        >
          Terms of use
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
