import styled from "@emotion/styled";
import CancelIcon from "@mui/icons-material/Cancel";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Typography,Stack } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
function Navbar({ page }) {
  const [showMenu, setShowMenu] = useState(true);
  const handleMenuClick = () => {
    setShowMenu(false);
  };
  const handleCancelClick = () => {
    setShowMenu(true);
  };
  const DesignedBox = styled("Box")({
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
        width: { xs: "100%", md: "100%" },
        margin: "0px auto",
      }}
    >
      <Stack
      direction="row"
      spacing={2}
        sx={{
          display: { md: "flex", xs: "none" },
          flexDirection: "row",
          alignItems:'center',
          justifyContent: "space-between",
        }}
      >
        <Box flex={1} sx={{ marginLeft: "20px", textAlign: "start" }}>
          <img src={logo} width="100px" />
        </Box>
        <Box
          flex={4}
          sx={{
            textAlign:"center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {page === "home" || !page ? (
            <DesignedBox>
              <Typography
                variant="p"
                sx={{
                  marginTop: "10px",
                  display: "block",
                  paddingTop: "10px",
                  borderBottom: "3px solid black",
                  paddingBottom: "10px",
                }}
              >
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Home
                </NavLink>
              </Typography>
            </DesignedBox>
          ) : (
            <Box>
              <Typography
                variant="p"
                sx={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  marginTop: "10px",
                  display: "block",
                  "&:hover": {
                    borderBottom: "3px solid black",
                  },
                }}
              >
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}
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
                sx={{
                  marginTop: "10px",
                  display: "block",
                  paddingTop: "10px",
                  borderBottom: "3px solid black",
                  paddingBottom: "10px",
                }}
              >
                <NavLink
                  to="/service"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Services
                </NavLink>
              </Typography>
            </DesignedBox>
          ) : (
            <Box>
              <Typography
                variant="p"
                sx={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  marginTop: "10px",
                  display: "block",
                  "&:hover": {
                    borderBottom: "3px solid black",
                  },
                }}
              >
                <NavLink
                  to="/service"
                  style={{ textDecoration: "none", color: "black" }}
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
                sx={{
                  marginTop: "10px",
                  display: "block",
                  paddingTop: "10px",
                  borderBottom: "3px solid black",
                  paddingBottom: "10px",
                }}
              >
                <NavLink
                  to="/about"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  About us
                </NavLink>
              </Typography>
            </DesignedBox>
          ) : (
            <Box>
              <Typography
                variant="p"
                sx={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  marginTop: "10px",
                  display: "block",
                  "&:hover": {
                    borderBottom: "3px solid black",
                  },
                }}
              >
                {" "}
                <NavLink
                  to="/about"
                  style={{ textDecoration: "none", color: "black" }}
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
                sx={{
                  marginTop: "10px",
                  display: "block",
                  paddingTop: "10px",
                  borderBottom: "3px solid black",
                  paddingBottom: "10px",
                }}
              >
                <NavLink
                  to="/contact"
                  style={{ textDecoration: "none", color: "black" }}
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
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  marginTop: "10px",
                  display: "block",
                  "&:hover": {
                    borderBottom: "3px solid black",
                  },
                }}
              >
                <NavLink
                  to="/contact"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Contact us
                </NavLink>
              </Typography>
            </Box>
          )}
          {page === "chat" ? (
            <DesignedBox>
              <Typography
                variant="p"
                sx={{
                  marginTop: "10px",
                  display: "block",
                  paddingTop: "10px",
                  borderBottom: "3px solid black",
                  paddingBottom: "10px",
                }}
              >
                <NavLink
                  to="/servicepage"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Service Page
                </NavLink>
              </Typography>
            </DesignedBox>
          ) : (
            <Box>
              <Typography
                variant="p"
                sx={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  marginTop: "10px",
                  display: "block",
                  "&:hover": {
                    borderBottom: "3px solid black",
                  },
                }}
              >
                <NavLink
                  to="/servicepage"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Service Page
                </NavLink>
              </Typography>
            </Box>
          )}
           {page === "payment" || !page ? (
            <DesignedBox>
              <Typography
                variant="p"
                sx={{
                  marginTop: "10px",
                  display: "block",
                  paddingTop: "10px",
                  borderBottom: "3px solid black",
                  paddingBottom: "10px",
                }}
              >
                <NavLink
                  to="/payment"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Order
                </NavLink>
              </Typography>
            </DesignedBox>
          ) : (
            <Box>
              <Typography
                variant="p"
                sx={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  marginTop: "10px",
                  display: "block",
                  "&:hover": {
                    borderBottom: "3px solid black",
                  },
                }}
              >
                <NavLink
                  to="/payment"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Payment
                </NavLink>
              </Typography>
            </Box>
          )}
        </Box>
       <Box flex={2} sx={{ textAlign: "end", }}>
        <Button
            sx={{
              "&:hover": {
                color: "black",
                border: "2px solid #4730cd",
                borderRadius: "10px",
                borderWidth : "2px"
              },
              backgroundColor: "#4730cd",
              display:"inline-block",
              marginRight:"10px",
              color:"white",
              paddingLeft:"30px",
              paddingRight:"30px",
              paddingTop:"10px",
              paddingBottom:"10px",
              border: "2px solid black",
              borderRadius: "10px",
              // border:"none",
              fontSize: "75%",
              margiRight:"10px",
              fontWeight: "bold",
              marginTop: "5px",
            }}
          >
            <NavLink
              to="/signin"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              SIGN IN
            </NavLink>
          </Button>
    {!localStorage.getItem("id")&&<Button
      sx={{
        "&:hover": {
          color: "black",
          border: "2px solid #4730cd",
          borderRadius: "10px",
          borderWidth : "2px"
        },
        backgroundColor: "#4730cd",
        display:"inline-block",
        marginRight:"10px",
        color:"white",
        paddingLeft:"30px",
        paddingRight:"30px",
        paddingTop:"10px",
        paddingBottom:"10px",
        border: "2px solid black",
        borderRadius: "10px",
        // border:"none",
        fontSize: "75%",
        margiRight:"10px",
        fontWeight: "bold",
        marginTop: "5px",
      }}
    >
      <NavLink
        to="/signup"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        SIGN UP
      </NavLink>
    </Button>}
    {localStorage.getItem("id")&&<Button
       sx={{
        "&:hover": {
          color: "black",
          border: "2px solid #4730cd",
          borderRadius: "10px",
          borderWidth : "2px"
        },
        backgroundColor: "#4730cd",
        display:"inline-block",
        marginRight:"10px",
        color:"white",
        paddingLeft:"30px",
        paddingRight:"30px",
        paddingTop:"10px",
        paddingBottom:"10px",
        border: "2px solid black",
        borderRadius: "10px",
        fontSize: "75%",
        margiRight:"10px",
        fontWeight: "bold",
        marginTop: "5px",
      }}
    >
    
        Get Started
    </Button>}
          
        </Box>
        {localStorage.getItem("id")&&<Box flex={1}></Box>}
      </Stack>
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
                     {page === "servicepage" ? (
              <DesignedMobile>
                <Typography
                  variant="p"
                  sx={{ marginTop: "4px", display: "block" }}
                >
                  <NavLink
                    to="/servicepage"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Service Page
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
                    to="/servicepage"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Service Page
                  </NavLink>
                </Typography>
              </Box>
            )}
              {page === "payment" ? (
              <DesignedMobile>
                <Typography
                  variant="p"
                  sx={{ marginTop: "4px", display: "block" }}
                >
                  <NavLink
                    to="/payment"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                   Payment
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
                    to="/payment"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Payment
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

export default Navbar;
