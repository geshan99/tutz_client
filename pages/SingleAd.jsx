import Advertisements from "@/components/Advertisements";
import PaperFrame from "@/components/PaperFrame";
import ProfileView from "@/components/ProfileView";
import Ratings from "@/components/Ratings";
import styled from "@emotion/styled";
import { Box, Grid, Paper, Typography } from "@mui/material";

// const Item = styled(Paper)(() => ({
//   backgroundColor: "#ffffff",
//   border: "1px solid #D9DEE8",
//   borderRadius: "16px",
//   elevation: 2,
//   padding: "32px",
// }));

// todo:
// data

function SingleAd() {
  return (
    <Box sx={{ marginTop: "50px", marginX: "60px" }}>
      <Grid container spacing={4} direction="row" justifyContent="center">
        <Grid item md={3}>
          <PaperFrame>
            <Advertisements height="776px" />
          </PaperFrame>
        </Grid>
        <Grid item xs={12} md={9}>
          <PaperFrame>
            <Grid item container spacing={5} direction="row">
              <Grid item xs={12} md={8}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "25px",
                    lineHeight: "31.63px",
                  }}
                >
                  Physics for 2023 A/L - Individual Classes
                </Typography>
                <Box
                  width="100%"
                  marginTop={3}
                  sx={{
                    height: { md: "300px", xs: "auto" },
                  }}
                >
                  <img
                    style={{
                      borderRadius: "16px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src="https://shorturl.at/isyD4"
                  ></img>
                </Box>
                <Box marginTop={6}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    About
                  </Typography>
                  <Typography variant="body1" align="justify" sx={{ my: 2 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit nam quos ad voluptate optio, iste reiciendis magnam,
                    voluptatibus commodi fugit quia beatae! Dolores, illum
                    voluptate! Quos, explicabo? Tempora quam quo blanditiis nam
                    cum, dolorem dolor aliquam ullam! Harum culpa esse ipsa et
                    facilis adipisci dignissimos nam natus, tenetur, soluta
                    quam!
                  </Typography>
                  <Typography variant="body1" align="justify" sx={{ my: 2 }}>
                    A aliquid ipsum consequuntur, pariatur dolore excepturi
                    consequatur earum magnam necessitatibus, commodi blanditiis
                    voluptate sequi quod error dolores quibusdam libero
                    perferendis minus. Modi unde beatae ipsa dolores ad
                    perferendis vero doloribus eos quasi, accusamus consequuntur
                    molestiae. Repellat iusto error explicabo eum quos, ullam
                    earum id nostrum deserunt quam? Consequuntur, vel!
                  </Typography>
                </Box>
                <Box marginTop={4}>
                  <Ratings />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Grid
                  item
                  container
                  spacing={0}
                  direction="column"
                  marginTop={1}
                >
                  <Grid
                    item
                    sx={{
                      border: "2px solid #D9DEE8",
                      borderRadius: "8px",
                      padding: "8px",
                      marginY: "5px",
                    }}
                  >
                    <ProfileView />
                  </Grid>
                  <Grid
                    item
                    sx={{
                      border: "2px solid #D9DEE8",
                      borderRadius: "8px",
                      padding: "8px",
                    }}
                  >
                    <Advertisements height="478px" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </PaperFrame>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SingleAd;
