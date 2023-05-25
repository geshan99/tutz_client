import { Box, Button, Grid } from "@mui/material";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";

//todo
//MyAccount,Post Ad+, Post Class Request buttons

function Navbar() {
  const pages = [
    "Browse Classes",
    "Browse Class Requests",
    "Home",
    "Log in",
    "Sign up",
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#072471" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
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
                display: { xs: "none", md: "flex" },
                fontWeight: 900,
                fontSize: "31.25px",
              }}
            >
              Tutz.LK
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
              }}
            >
              Tutz.LK
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Grid
                  item
                  xs={12}
                  lg={8}
                  sx={{
                    display: "flex",
                    // justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Button
                    size="small"
                    variant="text"
                    sx={{
                      my: 2,
                      marginLeft: "300px",
                      marginRight: "30px",
                      color: "white",
                      display: "block",
                    }}
                  >
                    Browse Classes
                  </Button>
                  <Button
                    size="small"
                    variant="text"
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                    }}
                  >
                    Browse Class Requests
                  </Button>
                </Grid>

                <Grid
                  item
                  xs={12}
                  lg={4}
                  sx={{
                    paddingRight: "70px",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Button
                    size="small"
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Home
                  </Button>
                  <Button
                    size="small"
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Log in
                  </Button>
                  <Button
                    size="small"
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Sign up
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;
