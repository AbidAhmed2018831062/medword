import { Instagram } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import icon1 from "../../assets/images/footericon/1 (1).png"
import icon2 from "../../assets/images/footericon/1 (2).png"
import icon3 from "../../assets/images/footericon/1 (3).png"
import icon4 from "../../assets/images/footericon/1 (4).png"
import icon5 from "../../assets/images/footericon/1 (5).png"
import icon6 from "../../assets/images/footericon/1 (6).png"
function UpdatedFooter() {
  return (
    <Box sx={{ backgroundColor: "#876EFF" }}>
      <Box
        sx={{
          width: {
            xs: "95%",
            md: "76%",
            margin: "0px auto",
            paddingTop: "30px",
            paddingBottom: "30px",
          },
        }}
      >
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Box flex={1} sx={{ textAlign: "start" }}>
            <img src={logo} width="100px" />
          </Box>
          <Box flex={1} sx={{ alignItems: "flex-end", textAlign: "center",   marginTop: "25px" }}>
              <Box>
                <Typography variant="p" sx={{ display: "line" }}>
                  <NavLink to="/" style={{ color: "white" }}>
                    Home
                  </NavLink>
                </Typography>
              </Box>
          </Box>
          <Box flex={1} sx={{ alignItems: "flex-end",  textAlign: "center",   marginTop: "25px" }}>
              <Box>
                <Typography variant="p" sx={{ display: "line" }}>
                  <NavLink to="/" style={{ color: "white" }}>
                    Service
                  </NavLink>
                </Typography>
              </Box>
          </Box>
          <Box flex={1} sx={{ alignItems: "flex-end",  textAlign: "center",   marginTop: "25px" }}>
              <Box>
                <Typography variant="p" sx={{ display: "line" }}>
                  <NavLink to="/" style={{ color: "white" }}>
                    About Me
                  </NavLink>
                </Typography>
              </Box>
          </Box>
          <Box flex={1} sx={{ alignItems: "flex-end",  textAlign: "center",   marginTop: "25px" }}>
              <Box>
                <Typography variant="p" sx={{ display: "line" }}>
                  <NavLink to="/" style={{ color: "white" }}>
                    Contact US
                  </NavLink>
                </Typography>
              </Box>
          </Box>
          {/* <Box flex={1} sx={{ alignItems: "flex-end",  textAlign: "center",  marginTop: "25px" }}>
              <Box>
                <Typography variant="p" sx={{ display: "line", }}>
                  <NavLink to="/" style={{ color: "white" }}>
                    Payment
                  </NavLink>
                </Typography>
              </Box>
          </Box> */}
        </Stack>
        <hr
          style={{
            width: "100%",
            backgroundColor: "blue",
            marginTop: "20px",
            marginBotom: "20px",
            height: "3px",
          }}
        ></hr>
        <Box sx={{ textAlign: "start"}}>
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Box sx={{
              width: {
                xs: "85%",
                md: "30%",
                margin: "0px auto",
                paddingTop: "20px",
                paddingBottom: "30px",
              },
            }}>
              {/* <a>
                <FacebookIcon
                  sx={{
                    marginRight: "10px",
                    color: "white",
                    fontSize: "40px",
                  }}
                />
              </a>
              <a>
                <Instagram
                  sx={{ color: "white", fontSize: "40px", marginRight: "10px" }}
                />
              </a> */}
                <Box flex={1} sx={{ textAlign: "start", marginLeft: "30px" }}>
                  <Typography variant="p" sx={{ display: "line" }}>
                    <NavLink to="/" style={{ color: "white" }}>
                      <img src={icon1} width="30px" />
                    </NavLink>
                  </Typography>
                </Box>
              </Box>
            <Box flex={1} sx={{ textAlign: "end", marginRight:"50px", marginBottom: "30px" }}>
              <Typography
                variant="span"
                sx={{ alignItems: "end", color: "white" }}
              >
                Copyright © 2023 MedWordsmith, Inc. All rights reserved.
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default UpdatedFooter;
