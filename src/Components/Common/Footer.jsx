import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/images/logo.png";

import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <Box sx={{ backgroundColor: "#624DE3" }}>
      <Box
        sx={{
          width: { xs: "90%", md: "85%" },
          margin: "0px auto",
          padding: "30px 0px",
        }}
      >
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", marginBottom: "30px" }}
        >
          <Box flex={1} sx={{ textAlign: "start" }}>
            <Stack direction={{ xs: "column", md: "row" }}>
              <Typography variant="span" sx={{ marginRight: "10px" }}>
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Home
                </NavLink>
              </Typography>
              <Typography variant="span" sx={{ marginRight: "10px" }}>
                <NavLink
                  to="/service"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Services
                </NavLink>
              </Typography>
              <Typography variant="span" sx={{ marginRight: "10px" }}>
                <NavLink
                  to="/about"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  About Us
                </NavLink>
              </Typography>
              <Typography variant="span" sx={{ marginRight: "10px" }}>
                <NavLink
                  to="/contact"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Contact Us
                </NavLink>
              </Typography>
            </Stack>
          </Box>
          <Box flex={1} sx={{ textAlign: "end" }}>
            <Box
              sx={{
                backgroundColor: "white",
                padding: "10px",
                display: "inline-block",
                borderRadius: "50%",
              }}
            >
              <LinkedInIcon
                sx={{ display: "block", color: "blue", fontSize: "250%" }}
              />
            </Box>
          </Box>
        </Stack>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Box flex={2} sx={{ textAlign: "start" }}>
            <img src={logo} width="100px" />
          </Box>
          <Box flex={3}>
            <Typography
              variant="span"
              sx={{ alignItems: "end", color: "white" }}
            >
              Copyright © 2023 MedWordsmith, Inc. All rights reserved.
            </Typography>
          </Box>
          <Box flex={{ xs: 0, md: "2" }}></Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default Footer;
