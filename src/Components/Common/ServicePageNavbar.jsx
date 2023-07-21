import styled from "@emotion/styled";
import CancelIcon from "@mui/icons-material/Cancel";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
function ServicePageNavbar({ page }) {
  const [showMenu, setShowMenu] = useState(true);
  const handleMenuClick = () => {
    setShowMenu(false);
  };
  const handleCancelClick = () => {
    setShowMenu(true);
  };
  const DesignedBox = styled("Box")({
    color: "white",
    backgroundColor: "black",
    padding: 8,
    textAlign: "center",
    placeItems: "center",
  });
  const DesignedMobile = styled("div")({
    color: "white",
    backgroundColor: "black",

    textAlign: "start",
    padding: "10px 10px",
    borderBottom: "1px solid #fff",
  });
  return (
    <Box
      sx={{
        backgroundColor: "white",
        paddingTop: "20px",
        paddingBottom: "20px",
        width: { xs: "100%", md: "85%" },
        margin: "0px auto",
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "none" },
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box flex={2} sx={{ textAlign: "start" }}>
          <img src={logo} width="100px" />
        </Box>
        <Box
          flex={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {page === "home" || !page ? (
            <DesignedBox>
              <Typography
                variant="p"
                sx={{ marginTop: "4px", display: "block" }}
              >
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Home
                </NavLink>
              </Typography>
            </DesignedBox>
          ) : (
            <Box>
              <Typography
                variant="p"
                sx={{ marginTop: "10px", display: "block" }}
              >
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Home
                </NavLink>
              </Typography>
            </Box>
          )}
          {page === "services" ? (
            <DesignedBox>
              <Typography
                variant="p"
                sx={{ marginTop: "4px", display: "block" }}
              >
                <NavLink
                  to="/service"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Services
                </NavLink>
              </Typography>
            </DesignedBox>
          ) : (
            <Box>
              <Typography
                variant="p"
                sx={{ marginTop: "10px", display: "block" }}
              >
                <NavLink
                  to="/service"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Services
                </NavLink>
              </Typography>
            </Box>
          )}
          {page === "about" ? (
            <DesignedBox>
              <Typography
                variant="p"
                sx={{ marginTop: "4px", display: "block" }}
              >
                <NavLink
                  to="/about"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  About us
                </NavLink>
              </Typography>
            </DesignedBox>
          ) : (
            <Box>
              <Typography
                variant="p"
                sx={{ marginTop: "10px", display: "block" }}
              >
                {" "}
                <NavLink
                  to="/about"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  About us
                </NavLink>
              </Typography>
            </Box>
          )}
          {page === "contact" ? (
            <DesignedBox>
              <Typography
                variant="p"
                sx={{ marginTop: "4px", display: "block" }}
              >
                <NavLink
                  to="/contact"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Contact us
                </NavLink>
              </Typography>
            </DesignedBox>
          ) : (
            <Box>
              <Typography
                variant="p"
                sx={{
                  marginTop: "10px",
                  display: "block",
                }}
              >
                <NavLink
                  to="/contact"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Contact us
                </NavLink>
              </Typography>
            </Box>
          )}
        </Box>
        <Box flex={2} sx={{ textAlign: "end" }}>
          <Button
            sx={{
              backgroundColor: "white",
              border: "2px solid black",
              borderRadius: "10px",
              color: "black",
              fontSize: "75%",
              fontWeight: "bold",
              marginTop: "5px",
            }}
          >
            Register Now
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: {
            md: "none",
            xs: "block",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <Box flex={1} sx={{ textAlign: "start" }}>
            <img src={logo} width="100px" />
          </Box>
          {showMenu && (
            <Box flex={1} sx={{ textAlign: "end" }}>
              <MenuIcon sx={{ fontSize: "50px" }} onClick={handleMenuClick} />
            </Box>
          )}
          {!showMenu && (
            <Box flex={1} sx={{ textAlign: "end" }}>
              <CancelIcon
                sx={{ fontSize: "50px" }}
                onClick={handleCancelClick}
              />
            </Box>
          )}
        </Box>
        {!showMenu && (
          <Box
            sx={{
              zIndex: 100,
              position: "absolute",
              backgroundColor: "white",
              width: "100%",
            }}
          >
            {page === "home" || !page ? (
              <DesignedMobile>
                <Typography
                  variant="p"
                  sx={{ marginTop: "4px", display: "block" }}
                >
                  <NavLink
                    to="/"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Home
                  </NavLink>
                </Typography>
              </DesignedMobile>
            ) : (
              <Box
                sx={{
                  width: "calc(100% - 20px)",
                  textAlign: "start",
                  padding: "10px",
                  paddingTop: "5px",
                  borderBottom: "1px solid #F4F8FB",
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    marginTop: "10px",
                    fontWeight: "bold",
                    display: "block",
                    textAlign: "start",
                  }}
                >
                  <NavLink
                    to="/"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Home
                  </NavLink>
                </Typography>
              </Box>
            )}
            {page === "services" ? (
              <DesignedMobile>
                <Typography
                  variant="p"
                  sx={{ marginTop: "4px", display: "block" }}
                >
                  <NavLink
                    to="/service"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Services
                  </NavLink>
                </Typography>
              </DesignedMobile>
            ) : (
              <Box
                sx={{
                  width: "calc(100% - 20px)",
                  textAlign: "start",
                  padding: "10px",
                  paddingTop: "5px",
                  borderBottom: "1px solid #F4F8FB",
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    marginTop: "10px",
                    fontWeight: "bold",
                    display: "block",
                    textAlign: "start",
                  }}
                >
                  <NavLink
                    to="/service"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Services
                  </NavLink>
                </Typography>
              </Box>
            )}
            {page === "about" ? (
              <DesignedMobile>
                <Typography
                  variant="p"
                  sx={{ marginTop: "4px", display: "block" }}
                >
                  <NavLink
                    to="/about"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    About us
                  </NavLink>
                </Typography>
              </DesignedMobile>
            ) : (
              <Box
                sx={{
                  width: "calc(100% - 20px)",
                  textAlign: "start",
                  padding: "10px",
                  paddingTop: "5px",
                  borderBottom: "1px solid #F4F8FB",
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    marginTop: "10px",
                    fontWeight: "bold",
                    display: "block",
                    textAlign: "start",
                  }}
                >
                  <NavLink
                    to="/about"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    About us
                  </NavLink>
                </Typography>
              </Box>
            )}
            {page === "contact" ? (
              <DesignedMobile>
                <Typography
                  variant="p"
                  sx={{ marginTop: "4px", display: "block" }}
                >
                  <NavLink
                    to="/contact"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Contact us
                  </NavLink>
                </Typography>
              </DesignedMobile>
            ) : (
              <Box
                sx={{
                  width: "calc(100% - 20px)",
                  textAlign: "start",
                  padding: "10px",
                  paddingTop: "5px",
                  borderBottom: "1px solid #F4F8FB",
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    marginTop: "10px",
                    fontWeight: "bold",
                    display: "block",
                    textAlign: "start",
                  }}
                >
                  <NavLink
                    to="/contact"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Contact us
                  </NavLink>
                </Typography>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default ServicePageNavbar;
