import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <Grid container sx={{ padding: "80px 78px" }}>
      <Grid item md={3}>
        <Box sx={{ display: "inline" }}>
          <Image
            src="/Images/Logo.png"
            width={32.5}
            height={25}
            alt="Logo"
          ></Image>
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mx: 1,

              fontWeight: 900,
              fontSize: "31.25px",
              fontColor: "#222325",
            }}
          >
            Tutz.LK
          </Typography>
          <Typography
            sx={{
              mx: 1,
              display: { xs: "none", md: "flex" },
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19px",
              fontColor: "#222325",
              letterSpacing: "-0.02em",
              textAlign: "left",
              width: "270px",
              margin: "36px 0px",
            }}
          >
            Neque aliquet eu, felis gravida. Mauris tincidunt sit vehicula et
            rhoncus id. Enim vehicula fringilla fames quam orci. Sit et amet.
          </Typography>
          <Box sx={{ display: "inline" }}>
            <FacebookIcon />
            <InstagramIcon />
            <LinkedInIcon />
            <PinterestIcon />
            <TwitterIcon />
          </Box>
        </Box>
      </Grid>
      <Grid item md={3}>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "15px",
            fontColor: "#222325",
            letterSpacing: "0.2em",
            marginBottom: "36px",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          quick links
        </Typography>
        <ul
          style={{
            listStyle: "none",
            textAlign: "center",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "19px",
            letterSpacing: "-0.02em",
            fontColor: "#222325",
          }}
        >
          <li>About</li>
          <li>Blog</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
          <li>Contact Us</li>
        </ul>
      </Grid>
      <Grid item md={3}>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "15px",
            fontColor: "#222325",
            letterSpacing: "0.2em",
            marginBottom: "36px",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          newsletter
        </Typography>
      </Grid>
      <Grid item md={3}>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "15px",
            fontColor: "#222325",
            letterSpacing: "0.2em",
            marginBottom: "36px",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          contact
        </Typography>
        <Box
          sx={{
            display: "block",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "19px",
            letterSpacing: "-0.02em",
            fontColor: "#222325",
          }}
        >
          <Typography>Phone: 123-12345678 info@tutz.lk</Typography>
          <Typography> info@tutz.lk</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Footer;
